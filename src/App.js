import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

import VerticalBarChart from './components/BarChart/VerticalBarChart';
import HorizontalBarChart from './components/BarChart/HorizontalBarChart'
import StackedBarChart from './components/BarChart/StackedBarChart';
import StackedBarChartWithGroups from './components/BarChart/StackedBarChartWithGroups';
import FloatingBarChart from './components/BarChart/FloatingBarChart';
import BarChartBoarderRadius from './components/BarChart/BarChartBoarderRadius';

import LineChart from './components/LineChart/LineChart';
import MultiAxisLineChart from './components/LineChart/MultiAxisLineChart';
import SteppedLineChart from './components/LineChart/SteppedLineChart';

import Layout from './Layout';

function App() {
  const data = [50, 30, 30, 35, 40]
  const labels = [2017, 2018, 2019, 2020, 2021]
  const [csv, setCsv] = useState([])
  const [monthBasePassenger, setMonthBasePassenger] = useState([])

  const getCsvWithCallback = useCallback(async () => {
    try {
      const url = 'http://localhost:3001/csv'
      const axiosObj = await axios.get(url)
      const res = await axiosObj.data
      setCsv(res)
      console.log(csv);
    } catch (e) {
      console.log(e)
    }
  }, [])

  // fetch data useEffect
  useEffect(() => {
    getCsvWithCallback()
  }, [getCsvWithCallback])

  // mp data 처리 useEffect
  useEffect(() => {
    if (Array.isArray(csv) && csv.length) {
      const monthBase = csv.reduce((acc, cur) => {
        const month = cur['년월']
        const sum = Number(cur['합계'])
        const type = cur['구분']
        // acc.set(월, {
        //   month: 월,
        //   sum: 월 합계,
        // });
        if (!acc.has(month)) {
          acc.set(month, {
            sum: 0,
            getIn: 0,
            getOff: 0,
          })
        }

        const thisMonth = acc.get(month)
        const getIn = thisMonth['getIn']
        const getOff = thisMonth['getOff']

        acc.set(month, {
          sum: thisMonth['sum'] + sum,
          getIn: type === '승차' ? getIn + sum : getIn,
          getOff: type === '하차' ? getOff + sum : getOff,
        })
        return acc;
      }, new Map())
      // console.log(monthBase);
      const monthData =
        Array.from(monthBase, ([key, value]) => ({
          month: key,
          data: value
        }))
      setMonthBasePassenger(monthData)
    }
  }, [csv])


  // bp data 처리 useEffect
  useEffect(() => {
    if (Array.isArray(csv) && csv.length) {
      const busBase = csv.reduce((acc, cur) => {
        const busNo = cur['노선']
        const month = cur['년월']
        const sum = Number(cur['합계'])
        const type = cur['구분']

        if (!acc.has(busNo)) {
          const monthMap = new Map()
          acc.set(
            busNo,
            monthMap.set(month, { // 형태 만듬
              getIn: 0,
              getOff: 0
            })
          )
        }

        const thisBus = acc.get(busNo)
        const data = thisBus.get(month) // month 안의 value 가져올수있음
        const getIn = data ? Number(data['getIn']) : 0
        const getOff = data ? Number(data['getOff']) : 0

        thisBus.set(month, {
          getIn: type === '승차' ? getIn + sum : getIn,
          getOff: type === '하차' ? getOff + sum : getOff,
        })

        return acc;

      }, new Map())
      const bp = Array.from(busBase, ([key, value]) => {
        return {
          busNo: key,
          data: Array.from(value, ([month, data]) => {
            return {
              month,
              ...data //스프레드연산자 사용시 아래와 같은 효과
              // getIn: data.getIn,  
              // getOff: data.getOff
            }
          })

        }
      })
      setBusBasePassenger(bp);
    }

  }, [csv])

  return (
    <Layout>
      <VerticalBarChart monthBasePassenger={monthBasePassenger} />
      <HorizontalBarChart monthBasePassenger={monthBasePassenger} />
      <LineChart data={data} labels={labels} />
      <StackedBarChart data={data} labels={labels} />
      <StackedBarChartWithGroups data={data} labels={labels} />
      <FloatingBarChart data={data} labels={labels} />
      <BarChartBoarderRadius data={data} labels={labels} />
      <MultiAxisLineChart data={data} labels={labels} />
      <SteppedLineChart data={data} labels={labels} />
    </Layout>
  );
}

export default App;

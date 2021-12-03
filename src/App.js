import React from 'react';
import VerticalBarChart from './components/BarChart/VerticalBarChart';
import HorizontalBarChart from './components/BarChart/HorizontalBarChart'
import StackedBarChart from './components/BarChart/StackedBarChart';
import StackedBarChartWithGroups from './components/BarChart/StackedBarChartWithGroups';
import FloatingBarChart from './components/BarChart/FloatingBarChart';
import BarChartBoarderRadius from'./components/BarChart/BarChartBoarderRadius';

import LineChart from './LineChart'
import Layout from './Layout';

function App() {
  const data = [50, 40, 30, 35, 40]
  const labels = [2017, 2018, 2019, 2020, 2021];

  return (
    <Layout>
      <VerticalBarChart data={data} labels={labels} />
      <HorizontalBarChart data={data} labels={labels} />
      <LineChart data={data} labels={labels} />
      <StackedBarChart data={data} labels={labels} />
      <StackedBarChartWithGroups data={data} labels={labels} />
      <FloatingBarChart data={data} labels={labels} />
      <BarChartBoarderRadius data={data} labels={labels} />
    </Layout>
  );
}

export default App;

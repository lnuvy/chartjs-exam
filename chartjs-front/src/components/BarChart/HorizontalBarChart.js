import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react'

function HorizontalBarChart(props) {
  const { monthBasePassenger: mp } = props
  const canvasDom = useRef(null);

  // console.log(mp);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const horizontalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: mp.map((row) => (row.month)),
        datasets: [
          {
            label: "월별 버스 승/하차 합계",
            data: mp.map((row) => (row.data.sum)),
          },
        ],
      },
      options: {
        indexAxis: "y",
        plugins: {
          title: {
            display: true,
            text: '2019 대구버스 승/하차 합계 - BarChart'
          },
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      horizontalBarChart.destroy();
    }
  }, [mp])

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}

export default HorizontalBarChart;
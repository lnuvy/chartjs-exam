import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react'

function StackedBarChart(props) {
  const { monthBasePassenger: mp } = props
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const stackedBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: mp.map((row) => (row.month)),
        datasets: [
          // {
          //   label: "월별 버스 승/하차 합계",
          //   data: mp.map((row) => (row.data.sum)),
          //   backgroundColor: 'rgba(255, 0, 0, 0.3)'
          // },
          {
            label: "월별 버스 승차 통계",
            data: mp.map((row) => (row.data.getIn)),
            backgroundColor: 'rgba(0, 255, 0, 0.3)',
          },
          {
            label: "월별 버스 하차 통계",
            data: mp.map((row) => (row.data.getOff)),
            backgroundColor: 'rgba(0, 0, 255, 0.3)',
          },

        ],
        // border: '5px solid rgba(255, 0, 0, 0.5)'
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });


    return () => {
      stackedBarChart.destroy();
    }
  }, [mp])

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}

export default StackedBarChart;
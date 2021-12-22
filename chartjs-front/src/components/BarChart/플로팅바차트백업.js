import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react'

function FloatingBarChart(props) {
  const { monthBasePassenger: mp } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const floatingBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: mp.map((row) => (row.month)),
        datasets: [
          {
            data: mp.map((row) => {
              return [0, row.data.sum,]
            }),
            backgroundColor: 'rgba(255, 0, 0, 0.3)'
          },
          {
            data: mp.map((row) => {
              return [0, row.data.getIn]
            }),
            backgroundColor: 'rgba(0, 0, 255, 0.3)'
          },
          {
            data: mp.map((row) => {
              return [0, row.data.getOff]
            }),
            backgroundColor: 'rgba(0, 255, 0, 0.3)'
          },
        ],
      },
      options: {
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
      floatingBarChart.destroy();
    }
  }, [mp])

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}

export default FloatingBarChart;
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react'

function HorizontalBarChart(props) {
  const { monthBasePassenger: mp } = props
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const horizontalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: mp.map((row) => (row.month)),
        datasets: [
          {
            data: mp.map((row) => (row.data.sum)),
          },
        ],
      },
      options: {
        indexAxis: "y",
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
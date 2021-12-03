import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react'

function HorizontalBarChart(props) {
  const {data, labels} = props

  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const horizontalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
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
  }, [])

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}

export default HorizontalBarChart;
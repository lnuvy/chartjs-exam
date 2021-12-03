import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function LineChart(props) {

  const {data, labels} = props

  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: data
          },
        ],
      },
    });
    return () => {
      lineChart.destroy();
    }
  }, []);


  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}
export default LineChart;
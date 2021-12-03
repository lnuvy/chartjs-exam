import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function SteppedLineChart(props) {

  const {data, labels} = props

  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const steppedLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            stepped: true,
          },
        ],
      },
      options: {
        interaction: {
          intersect: false,
          axis: 'x'
        },
      }
    });
    return () => {
      steppedLineChart.destroy();
    }
  }, []);


  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}
export default SteppedLineChart;
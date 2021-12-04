import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function MultiAxisLineChart(props) {

  const {data, labels} = props

  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const multiAxisLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            yAxisID: 'y',
            borderColor: 'rgba(244, 53, 32, 0.5)',
            backgroundColor: 'rgba(244, 53, 32, 0.7)',
          },
          {
            data: data.map((index) => {
              return index % 4;
            }),
            yAxisID: 'y1',
            borderColor: 'rgba(53, 32, 244, 0.5)',
            backgroundColor: 'rgba(53, 32, 244, 0.7)'
          },
        ],
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
          },
        }
      }
    });
    return () => {
      multiAxisLineChart.destroy();
    }
  }, []);


  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}
export default MultiAxisLineChart;
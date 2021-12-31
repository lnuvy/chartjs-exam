import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function SteppedLineChart(props) {

  const { monthBasePassenger: mp } = props
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const steppedLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: mp.map((row) => (row.month)),
        datasets: [
          {
            label: "월별 버스 승/하차 합계",
            data: mp.map((row) => (row.data.sum)),
            stepped: true,
            borderColor: 'rgba(244, 53, 32, 0.5)',
            backgroundColor: 'rgba(244, 53, 32, 0.7)',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          axis: 'x'
        },
      }
    });
    return () => {
      steppedLineChart.destroy();
    }
  }, [mp]);


  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}
export default SteppedLineChart;
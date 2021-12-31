import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function MultiAxisLineChart(props) {

  const { monthBasePassenger: mp } = props
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const multiAxisLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: mp.map((row) => (row.month)),
        datasets: [
          {
            label: "월별 버스 승차 통계",
            data: mp.map((row) => (row.data.getIn)),
            yAxisID: 'y',
            borderColor: 'rgba(53, 244, 32, 0.5)',
            backgroundColor: 'rgba(53, 244, 32, 0.7)'
          },
          {
            label: "월별 버스 하차 통계",
            data: mp.map((row) => (row.data.getOff)),
            yAxisID: 'y1',
            borderColor: 'rgba(53, 32, 244, 0.5)',
            backgroundColor: 'rgba(53, 32, 244, 0.7)'
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
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
  }, [mp]);


  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}
export default MultiAxisLineChart;
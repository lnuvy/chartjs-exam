import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function LineChart(props) {

  const { monthBasePassenger: mp } = props
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const lineChart = new Chart(ctx, {
      type: 'line',
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
        plugins: {
          title: {
            display: true,
            text: '2019 대구버스 승/하차 합계 - LineChart'
          },
          legend: {
            display: false,
          },
        },
      },
    });
    return () => {
      lineChart.destroy();
    }
  }, [mp]);


  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}
export default LineChart;
import React, { useEffect, useRef } from 'react';
// import { registerables, Chart} from 'chart.js'
// Chart.register(...registerables);
// // Chart.register(BarController, CategoryScale, LinearScale)

import Chart from 'chart.js/auto';

function VerticalBarChart(props) {
  const { monthBasePassenger: mp } = props;
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const verticalBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: mp.map((row) => (row.month)),
        datasets: [
          {
            label: "월별 버스 승/하차 합계",
            data: mp.map((row) => (row.data.sum)),
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            label: "월별 버스 승차 통계",
            data: mp.map((row) => (row.data.getIn)),
            backgroundColor: 'rgba(0, 255, 0, 0.3)',
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            label: "월별 버스 하차 통계",
            data: mp.map((row) => (row.data.getOff)),
            backgroundColor: 'rgba(0, 0, 255, 0.3)',
            borderRadius: 10,
            borderSkipped: false,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    return () => {
      verticalBarChart.destroy();
    }
  }, [mp]);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default VerticalBarChart;

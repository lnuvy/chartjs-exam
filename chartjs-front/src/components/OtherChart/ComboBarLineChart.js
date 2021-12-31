import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function ComboBarLineChart(props) {
  const { monthBasePassenger: mp } = props
  const canvasDom = useRef(null)

  useEffect(() => {
      const ctx = canvasDom.current.getContext('2d')
      const comboBarLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: mp.map((row) => (row.month)),
          datasets: [
            {
              label: "월별 버스 승/하차 합계",
              data: mp.map((row) => (row.data.sum)),
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            },
            {
              label: "월별 버스 승차 통계",
              data: mp.map((row) => (row.data.getIn)),
              borderColor: 'rgba(53, 244, 32, 0.5)',
              backgroundColor: 'rgba(53, 244, 32, 0.7)',
              type: 'line',
            },
            {
              label: "월별 버스 하차 통계",
              data: mp.map((row) => (row.data.getOff)),
              borderColor: 'rgba(53, 32, 244, 0.5)',
              backgroundColor: 'rgba(53, 32, 244, 0.7)',
              type: 'line',
            }
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      });
      return () => {
        comboBarLineChart.destroy();
      }
  }, [mp]);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  )
}
export default ComboBarLineChart;
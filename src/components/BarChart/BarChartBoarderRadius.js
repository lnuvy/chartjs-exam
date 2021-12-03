import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


function BarChartBoarderRadius(props) {
  const {data, labels} = props

  const canvasDom = useRef(null);

  useEffect(() => {

    const ctx = canvasDom.current.getContext('2d');
    const barChartBoarderRadius = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            data: data,
            backgroundColor: 'rgba(0, 255, 0, 0.3)'
          },
          {
            data: data,
            backgroundColor: 'rgba(0, 0, 255, 0.3)'
          },
        ],
      },
    });
    return () => {
      barChartBoarderRadius.destroy();
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default BarChartBoarderRadius;

import React, { useEffect, useRef } from 'react';
// import { registerables, Chart} from 'chart.js'
// Chart.register(...registerables);
// // Chart.register(BarController, CategoryScale, LinearScale)

import Chart from 'chart.js/auto';

function VerticalBarChart(props) {
  const {data, labels} = props

  const canvasDom = useRef(null);

  // const RandomNumber = (arr) => {
  //   let tmp = []
  //   for(var i=0; i<arr.length; i++) {
  //     let r = Math.random() * 5;
  //     tmp[i] = arr[r]
  //   }
  //   return tmp;
  // }

  useEffect(() => {

    const ctx = canvasDom.current.getContext('2d');
    const verticalBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: 'rgba(255, 0, 0, 0.3)'
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
      verticalBarChart.destroy();
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default VerticalBarChart;

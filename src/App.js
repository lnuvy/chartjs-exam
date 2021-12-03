import React from 'react';
import VerticalBarChart from './VerticalBarChart';
import HorizontalBarChart from './HorizontalBarChart'
import LineChart from './LineChart'
import Layout from './Layout';

function App() {
  const data = [50, 40, 30, 35, 40]
  const labels = [2017, 2018, 2019, 2020, 2021];

  return (
    <Layout>
      <VerticalBarChart data={data} labels={labels} />
      <HorizontalBarChart data={data} labels={labels} />
      <LineChart data={data} labels={labels} />
    </Layout>
  );
}

export default App;

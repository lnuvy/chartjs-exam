import React from 'react';
import VerticalBarChart from './VerticalBarChart';
import HorizontalBarChart from './HorizontalBarChart'
import LineChart from './LineChart'
import Layout from './Layout';

function App() {

  return (
    <Layout>
      <VerticalBarChart />
      <HorizontalBarChart />
      <LineChart />
    </Layout>
  );
}

export default App;

import React from 'react';
import { Pie } from 'react-chartjs-2';

const SmallPieChart = ({data}) => {
  

  // Customize chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Set to true to maintain aspect ratio
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'rgba(255, 255, 255, 0.8)'
      }
    }
    // Add more options as needed
  };

  // Adjust the size of the chart to fit in a small box
  const chartSize = {
    width: 500,
    height: 240
  };

  return (
    <div style={{ width: chartSize.width, height: chartSize.height }}>
      <h2 style={{fontWeight:"600px"}}>Revenue</h2>
      <Pie data={data} options={options} height={chartSize.height} width={chartSize.width} />
    </div>
  );
};

export default SmallPieChart;

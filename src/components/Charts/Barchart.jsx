import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Doughnut,Line} from "react-chartjs-2" 
import React from 'react'
const Barchart = ({data}) => {
    const options = {
        scales: {
          y: {
            display: false, // Set to false to hide the y-axis
          },
        },
        layout: {
          padding: {
            left: 50, // Adjust left padding as needed
            right: 50, // Adjust right padding as needed
            top: 0,
            bottom: 0,
          },
                 },
      };
    
      return (
        <Bar 
          data={data}
          options={options}
         
         
        />
      );
}

export default Barchart
import React from 'react'
import {Pie} from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto' //ใช้สำหรับ chart
import { padding } from '@mui/system';

const PieChart = ({ chartData }) => {
  return (
    <Pie
      data={chartData}
      options={{
        plugins: {
          legend: { position: "right",
          labels: {
                    font: { size: 16 //font of the sport types
          },
          subtitle: {
            display: true,
            fontSize: 50,
            // text: "Your Activities",
          },
        },
          },
        },
        }}
    />
  );
};

export default PieChart;
import React from 'react'
import {Pie} from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto'

const PieChart = ({ chartData }) => {
  return (
    <Pie
      data={chartData}
      options={{
        plugins: {
          legend: { position: "right" },
          subtitle: {
            display: true,
            text: "จำนวนในการออกกำลังกายแต่ละประเภท",
          },
        },
      }}
    />
  );
};

export default PieChart;
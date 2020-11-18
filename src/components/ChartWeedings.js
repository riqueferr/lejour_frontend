import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from "react";
import axios from "axios";

const ChartWeedings = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let empBudget = [];
    let empStyle = [];

    axios
      .get("https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/wedding")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          empBudget.push(parseInt(dataObj.BUDGET));
          empStyle.push(dataObj.STYLE);
        }

        setChartData({
          labels: empStyle,
          datasets: [
            {
              label: 'Total 2020 (R$ Mil)',
              data: empBudget,
              borderColor: ['rgb(220, 85, 90'],
              pointBackgroundColor: 'rgba(220, 85, 90)',

            }
            // {
            //   label: 'Total 2019 (R$ Mil)',
            //   data: [23750, 8200, 12678, 3775, 4982, 7983, 14821, 12982, 17983, 10983, 25983, 30983],
            //   borderColor: ['rgba(255, 180, 27, 0.5)'],
            //   pointBackgroundColor: 'rgba(255, 180, 27, 0.7)',

            // }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empBudget, empStyle);
  }



useEffect(() => {
  chart();
}, []);

return (
  <Line data={chartData} />
);

}
export default ChartWeedings;
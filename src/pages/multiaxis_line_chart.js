import React, { useState } from "react";
import { filtring_by_date, calculate_data_by_type } from "./filtring_function";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./chart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Multiaxis_line_chart = ({ trump_data, obama_data }) => {
  const [enteredYear, setEntedYear] = useState("2022");
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Multi Axis",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let data1;
  let data2;
  let d1 = [];
  let d2 = [];

  data2 = filtring_by_date(trump_data, "2022-01-01", "2022-12-31", undefined);
  data1 = filtring_by_date(obama_data, "2022-01-01", "2022-12-31", undefined);
  d2 = calculate_data_by_type(data1);
  d1 = calculate_data_by_type(data2);
  console.log("d2=\n", d2);
  console.log("data2=\n", data2);
  let final_data2 = [];
  let final_data1 = [];
  for (let j = 0; j < d2.length; j++) {
    final_data2.push({ x: 10, y: d2[j], r: 10 });
  }
  for (let h = 0; h < d1.length; h++) {
    final_data1.push({ x: 10, y: d1[h], r: 10 });
  }
  console.log("D1=\n", d1);
  console.log("D2=\n", d2);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: final_data1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        yAxisID: "y1",
      },
      {
        label: "Dataset 2",
        data: final_data2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="multiaxis_line_chart">
      <h1>Hello you are in multiaxis_line_chart</h1>
      <Line options={options} data={data} />
    </div>
  );
};
export default Multiaxis_line_chart;

import React from "react";
import "./chart.css";
import obama from "../obama";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
const Bar_chart = ({ trump_data }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
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
  const dataset1 = [10, 20, 30, 40, 74, 89, 100, 30, 40, 74, 89, 100];
  const dataset2 = [80, 70, 10, 60, 65, 54, 98, 30, 40, 74, 89, 100];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: dataset2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="bar_chart">
      <h1>Bar chart</h1>
      <Bar options={options} data={data} />
    </div>
  );
};
export default Bar_chart;

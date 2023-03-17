import React from "react";
import "./chart.css";
import Navbar from "../component/Navbar/Navbar";
import { months } from "./filtring_function";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Choose_person } from "./filtring_function";
import { Link, useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
const Bar_chart = ({ trump_data, obama_data }) => {
  let { personId } = useParams();
  let person1;
  let person2;
  person1 = Choose_person(personId);
  person2 = Choose_person(personId);

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
        text: "Trump vs Obama",
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
  const dataset1 = months(person1);
  const dataset2 = months(person2);
  const data = {
    labels,
    datasets: [
      {
        label: "Trump",
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Obama",
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

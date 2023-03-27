import React, { useState } from "react";
import "./chart.css";
import Navbar from "../component/Navbar/Navbar";
import { months, Get_personID_by_Fullname } from "./filtring_function";
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
import PersonSelection from "../component/person_selection/person_selection";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Bar_chart = () => {
  let { personId } = useParams();
  let person1 = Choose_person(personId);
  let p1n = person1.name;
  let p1d = person1.person_data;
  let p2n = undefined;
  let p2d = undefined;
  const conststate = {
    p1n: p1n,
    p1d: p1d,
    p2n: p2n,
    p2d: p2d,
  };
  const [state, setState] = useState({
    p1n: p1n,
    p1d: p1d,
    p2n: p2n,
    p2d: p2d,
  });
  const changeState = (p1n, p1d, p2n, p2d) => {
    setState({
      p1n: p1n,
      p1d: p1d,
      p2n: p2n,
      p2d: p2d,
    });
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
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
  const dataset1 = months(state.p1d);
  const dataset2 = months(state.p2d);
  const data = {
    labels,
    datasets: [
      {
        label: person1.name,
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: person1.name,
        data: dataset2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="bar_chart">
      <h1>Bar chart</h1>
      <PersonSelection
        changeState={changeState}
        state={state}
        conststate={conststate}
      />
      <Bar options={options} data={data} />
    </div>
  );
};
export default Bar_chart;

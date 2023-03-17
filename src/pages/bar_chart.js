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
  let [person1_data, person1_name] = Choose_person(personId);
  let [person2_data, person2_name] = [undefined, undefined];
  const [firstPerson, setFirstPerson] = useState(null);
  const [secondPerson, setSecondPerson] = useState(null);
  let twoPersons = false;
  if (firstPerson !== null) {
    personId = Get_personID_by_Fullname(firstPerson.value);
    [person1_data, person1_name] = Choose_person(personId);
  }
  if (secondPerson !== null) {
    personId = Get_personID_by_Fullname(secondPerson.value);
    [person2_data, person2_name] = Choose_person(personId);
  }
  if (firstPerson !== null && secondPerson !== null) {
    twoPersons = true;
  }

  const firsthandle = (change) => {
    setFirstPerson(change);
  };
  const secondhandle = (change) => {
    setSecondPerson(change);
  };
  // if(firstPerson)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: twoPersons
          ? `${person1_name} Vs ${person2_name}`
          : `${person1_name}`,
        // text: `${person1_name} Vs ${person2_name}`,
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
  const dataset1 = months(person1_data);
  const dataset2 = months(person2_data);
  const data = {
    labels,
    datasets: [
      {
        label: person1_name,
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: person2_name,
        data: dataset2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  console.log("twoPersons\n", twoPersons);
  return (
    <div className="bar_chart">
      <h1>Bar chart</h1>
      <h1>
        {person1_name} {twoPersons && <h1> Vs {person2_name}</h1>}
      </h1>
      <PersonSelection firsthandle={firsthandle} secondhandle={secondhandle} />
      <Bar options={options} data={data} />
    </div>
  );
};
export default Bar_chart;

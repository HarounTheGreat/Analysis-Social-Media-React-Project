import React, { useState } from "react";
import "./chart.css";
import Navbar from "../component/Navbar/Navbar";
import { months, Get_personID_by_Fullname } from "./filtring_function";
import DatePicker from "react-datepicker";
import DateRangePicker from "daterangepicker";
import { DayPicker } from "react-day-picker";
import {
  CalendarComponent,
  ChangedEventArgs,
} from "@syncfusion/ej2-react-calendars";
// import { SampleBase } from "../common/sample-base";
import Calendar from "moedim";
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
  const [to_Date, setTo_Date] = useState("2021-12-16");
  console.log("to_Date=======\n", to_Date);
  let { personId } = useParams();
  let [person1_data, person1_name] = Choose_person(personId);
  let [person2_data, person2_name] = [undefined, undefined];
  const defaultparameter = {
    value: Choose_person(personId)[1],
    label: Choose_person(personId)[1],
  };
  const [firstPerson, setFirstPerson] = useState(defaultparameter);
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
  return (
    <div className="bar_chart">
      <h1>Bar chart</h1>
      <PersonSelection
        firsthandle={firsthandle}
        secondhandle={secondhandle}
        person1_name={person1_name}
        person2_name={person2_name}
        twoPersons={twoPersons}
      />
      <Bar options={options} data={data} />
      {/* <div className="control-pane">
        <div className="control-section">
          <div className="calendar-control-section">
            <CalendarComponent change={this.onchange}></CalendarComponent>
            <label id="date_label">Selected Value:</label>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Bar_chart;

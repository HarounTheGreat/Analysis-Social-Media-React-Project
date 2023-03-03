import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Calcul from "../component/clacul";
ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut_chart = ({ trump_data }) => {
  const [filtred_data, setFiltred_data] = useState(Calcul(trump_data));
  const [from_Date, setFrom_Date] = useState("");
  const [to_Date, setTo_Date] = useState("");
  let test = false;
  console.log("filtred_data \n", filtred_data);
  if (filtred_data[0] === 0 && filtred_data[1] === 0 && filtred_data[2] === 0) {
    test = false;
  } else {
    test = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    let arr = filtring_function(trump_data, from_Date, to_Date);
    // ---------------- call function
    setFiltred_data(Calcul(arr));
  };

  const data = {
    labels: ["Netural", "Positive", "Negative"],
    datasets: [
      {
        label: "# of Comments",
        data: filtred_data,
        backgroundColor: [
          "rgb(83, 127, 231)",
          "rgb(3, 201, 136)",
          "rgb(235, 69, 95)",
        ],
        borderColor: [
          "rgb(83, 127, 231)",
          "rgb(3, 201, 136)",
          "rgb(235, 69, 95)",
        ],
        borderWidth: 1,
      },
    ],
  };
  if (test) {
    return (
      <div className="doughtnur_chart">
        <h1>Doughnut Chart</h1>
        <Doughnut data={data} />
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                onChange={(e) => setFrom_Date(e.target.value)}
                value={from_Date}
              />
            </div>
          </div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                onChange={(e) => setTo_Date(e.target.value)}
                value={to_Date}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="doughtnur_chart">
        <h1> There is no Data here</h1>
        <Link to="/">Home Page</Link>
      </div>
    );
  }
};

const filtring_function = (data, from_Date, to_Date) => {
  console.log(
    "data=",
    data,
    "from_Date \n",
    from_Date,
    "to_Date \n",
    to_Date,
    "----"
  );
  let filtring_data = [];
  var dateCheck = "02-07-2021";

  var d1 = from_Date.split("-");
  console.log("d1=", d1);
  var d2 = to_Date.split("-");
  console.log("d2=", d2);
  var c = dateCheck.split("-");
  console.log("c", c);

  var from = new Date(d1[0], parseInt(d1[1]) - 1, d1[2]); // -1 because months are from 0 to 11
  var to = new Date(d2[0], parseInt(d2[1]) - 1, d2[2]);
  var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
  console.log("checkkk=", check > from && check < to);

  for (let i = 0; i < data.length; i++) {
    dateCheck = data[i].Year;
    c = dateCheck.split("-");
    check = new Date(c[0], parseInt(c[1]) - 1, c[2]);
    if (check > from && check < to) {
      filtring_data.push(data[i]);
    }
  }
  return filtring_data;
};

export default Doughnut_chart;

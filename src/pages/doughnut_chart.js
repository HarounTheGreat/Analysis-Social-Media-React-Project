import React, { useState } from "react";
import "./chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Calcul from "../component/clacul";

ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut_chart = ({ trump_data }) => {
  let filtring_data = [];
  const [filtred_data, setFiltred_data] = useState(Calcul(trump_data));
  const [entredDate, setEntredDate] = useState("");
  // const [test, setTest] = useState(false);
  let test = false;
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("entredDate=\n", entredDate);
    for (let i = 0; i < trump_data.length; i++) {
      if (entredDate === trump_data[i].Year) {
        filtring_data.push(trump_data[i]);
      }
    }
    if (test) {
      setFiltred_data(Calcul(filtring_data));
    } else setFiltred_data(Calcul(trump_data));
  };
  if (filtred_data[0] === 0 && filtred_data[1] === 0 && filtred_data[2] === 0) {
    test = false;
  } else {
    test = true;
  }
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

  return (
    <div className="doughtnur_chart">
      <h1>Doughnut Chart</h1>
      {!test && <h1>There is no data in that date</h1>}
      <Doughnut data={data} />
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={entredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default Doughnut_chart;

import {
  filtring_by_date,
  Filter_data_by_language,
  Languages_used,
} from "./filtring_function";
import React from "react";
import Pie_chart from "./pie_chart";
import "./chart.css";
const Analyse_by_language = ({ trump_data }) => {
  let Languages_used_array;
  let result;
  Languages_used_array = Languages_used(trump_data);
  result = Filter_data_by_language(trump_data, Languages_used_array);
  console.log("result \n", result[0][0]);
  return (
    <div>
      {/* <h1> Analysis By Language</h1>
      <div>
        {result.map((one_table) => {
          return (
            <div className="analyse_by_language">
              <h1>{one_table[0].Language}</h1>
              <Pie_chart key={one_table.N} trump_data={one_table}></Pie_chart>
            </div>
          );
        })}
      </div> */}
      <div>
        <div className="analyse_by_language">
          <h1> Engish </h1>
          <Pie_chart trump_data={result[0]}></Pie_chart>
          <h1> Italian </h1>
          <Pie_chart trump_data={result[1]}></Pie_chart>
        </div>
      </div>
    </div>
  );
};
export default Analyse_by_language;

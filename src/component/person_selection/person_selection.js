import Select from "react-select";
import React, { useState } from "react";
import listData from "../services/listData";
const PersonSelection = ({ firsthandle, secondhandle }) => {
  let selection_options = [];
  let one_option = {};
  for (let i = 0; i < listData.length; i++) {
    one_option = { value: listData[i].Fullname, label: listData[i].Fullname };
    selection_options.push(one_option);
  }
  // const selection_options = [
  //   { value: "2019", label: "2019" },
  //   { value: "2020", label: "2020" },
  //   { value: "2021", label: "2021" },
  //   { value: "2022", label: "2022" },
  // ];
  return (
    <div className="person-selection">
      <div className="year_selection">
        <div className="cell cell-1">First Person</div>
        <div className="cell cell-2">
          <Select
            defaultValue={"firstPerson"}
            onChange={(change) => firsthandle(change)}
            options={selection_options}
          />
        </div>
        <div className="cell cell-3">Second Person</div>
        <div className="cell cell-4">
          <Select
            defaultValue={"firstPerson"}
            onChange={(change) => secondhandle(change)}
            options={selection_options}
          />
        </div>
      </div>
    </div>
  );
};
export default PersonSelection;

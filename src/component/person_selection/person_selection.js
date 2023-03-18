import Select from "react-select";
import React, { useState } from "react";
import listData from "../services/listData";
import "./person_selection.css";
import { Get_Img_by_Fullname } from "../../pages/filtring_function";
const PersonSelection = ({
  firsthandle,
  secondhandle,
  person1_name,
  person2_name,
  twoPersons,
}) => {
  let img1 = "one";
  let img2 = "two";
  img1 = Get_Img_by_Fullname(person1_name);
  img2 = Get_Img_by_Fullname(person2_name);
  let selection_options = [];
  let one_option = {};
  for (let i = 0; i < listData.length; i++) {
    one_option = { value: listData[i].Fullname, label: listData[i].Fullname };
    selection_options.push(one_option);
  }
  console.log("firsthandle", firsthandle);
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
      {!twoPersons && (
        <>
          <h1>{person1_name}</h1>
          <img className="single-image" alt={person1_name} src={img1} />
        </>
      )}
      {twoPersons && (
        <>
          <div className="two-images">
            <div className="first-image">
              <img alt={person1_name} src={img1} />
              <div className="first-name">{person1_name}</div>
            </div>
            <div className="vs">VS</div>
            <div className="second-image">
              <img alt={person2_name} src={img2} />
              <div className="first-name">{person2_name}</div>
            </div>
          </div>
          {/* <div className="persons-names">
            <div className="first-name">{person1_name}</div>
            <div className="vs1">Vs</div>
            <div className="second-name">{person2_name}</div>
          </div> */}
        </>
      )}
    </div>
  );
};
export default PersonSelection;

import Select from "react-select";
import React, { useState } from "react";
import listData from "../services/listData";
import "./person_selection.css";
import { Get_Img_by_Fullname } from "../../pages/filtring_function";
import DatePicker from "react-datepicker";
import { Checkbox } from "react-input-checkbox";
const PersonSelection = ({
  firsthandle,
  secondhandle,
  person1_name,
  person2_name,
  twoPersons,
}) => {
  const [to_Date, setTo_Date] = useState("");
  const [llk, setLlk] = useState("Hello");
  let person1;
  let person2;
  person2 = Get_Img_by_Fullname(person2_name);
  person1 = Get_Img_by_Fullname(person1_name);
  let selection_options = [];
  let one_option = {};
  for (let i = 0; i < listData.length; i++) {
    one_option = { value: listData[i].Fullname, label: listData[i].Fullname };
    selection_options.push(one_option);
  }

  return (
    <>
      <div className="year-selection">
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
      <div className="person-selection">
        {!twoPersons && (
          <div className="person-card">
            <img
              className="person-card-img"
              alt={person1_name}
              src={person1.Image}
            />
            <div className="person-card-desc">
              <div className="person-card-fullname">{person1.Fullname}</div>
              <div className="person-card-title">{person1.Status}</div>
              <div className="person-card-description">
                {person1.Description}
              </div>
            </div>
          </div>
        )}
        {twoPersons && (
          <>
            <div className="two-images">
              <div className="person-card">
                <img
                  className="person-card-img"
                  alt={person1_name}
                  src={person1.Image}
                />
                <div className="person-card-desc">
                  <div className="person-card-fullname">{person1.Fullname}</div>
                  <div className="person-card-title">{person1.Status}</div>
                  <div className="person-card-description">
                    {person1.Description}
                  </div>
                </div>
              </div>
              <div className="vs">VS</div>
              <div className="person-card2">
                <img
                  className="person-card-img"
                  alt={person2_name}
                  src={person2.Image}
                />
                <div className="person-card-desc">
                  <div className="person-card-fullname">{person2.Fullname}</div>
                  <div className="person-card-title">{person2.Status}</div>
                  <div className="person-card-description">
                    {person2.Description}
                  </div>
                </div>
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
      <div className="slicer">
        <div className="slicer-choose-date">
          <div className="slicer-date">
            <div className="slicer-date-title">Date</div>
            <div className="slicer-date-option">
              <input
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                onChange={(e) => setTo_Date(e.target.value)}
                value={to_Date}
              />
            </div>
          </div>
          <div className="slicer-date">
            <div className="slicer-date-title">To</div>
            <div className="slicer-date-option">
              <input
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                onChange={(e) => setTo_Date(e.target.value)}
                value={to_Date}
              />
            </div>
          </div>
        </div>
        <div className="slicer-opinion">Opinion</div>
        <div className="slicer-language">Language</div>
      </div>
    </>
  );
};
export default PersonSelection;

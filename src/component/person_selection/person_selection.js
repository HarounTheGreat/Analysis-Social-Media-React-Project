import Select from "react-select";
import React, { useState } from "react";
import listData from "../services/listData";
import "./person_selection.css";
import {
  Get_Img_by_Fullname,
  Languages_used,
  Choose_person,
} from "../../pages/filtring_function";
// secondhandle,
// person1_name,
// person2_name,
// twoPersons,
// changeState(p1n, p1d, p2n, p2d)
const PersonSelection = ({ state, changeState }) => {
  console.log("state=============================\n", state);
  const [positiveReview, setPositiveReview] = useState(true);
  const [neturalReview, setNeturalReview] = useState(true);
  const [negativeReview, setNegativeReview] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [from_Date, setFrom_Date] = useState("");
  const [to_Date, setTo_Date] = useState("");
  let twoPersons = false;
  let date_from_to = ["0", "0"];
  let display = "show-checkboxes";
  let checked1 = "checked";
  let checked2 = "checked";
  let checked3 = "checked";
  let openion_array = [true, true, true];
  date_from_to[0] = from_Date;
  date_from_to[1] = to_Date;
  positiveReview ? (checked1 = "checked") : (checked1 = "");
  neturalReview ? (checked2 = "checked") : (checked2 = "");
  negativeReview ? (checked3 = "checked") : (checked3 = "");
  openion_array[0] = positiveReview;
  openion_array[1] = neturalReview;
  openion_array[2] = negativeReview;
  let person1;
  let person2;
  person1 = Get_Img_by_Fullname(state.p1n);
  person2 = Get_Img_by_Fullname(state.p2n);
  let languages_used = Languages_used(Choose_person(person1.Id).person_data);
  let selection_options = [];
  let one_option = {};
  one_option = {};
  let languages_used2 = ["", ""];
  let languages_used_by_two;
  languages_used2[0] = Languages_used(Choose_person(person1.Id).person_data);
  if (person2 !== undefined) {
    languages_used2[1] = Languages_used(Choose_person(person2.Id).person_data);
  }
  languages_used_by_two = languages_used2[0].concat(languages_used2[1]);
  for (let i = 0; i < listData.length; i++) {
    one_option = {
      value: Choose_person(Get_Img_by_Fullname(listData[i].Fullname).Id)
        .person_data,
      label: listData[i].Fullname,
    };
    selection_options.push(one_option);
  }
  if (person1 !== undefined && person2 !== undefined) {
    twoPersons = true;
  }
  return (
    <>
      <div className="year-selection">
        <div className="cell cell-1">First Person</div>
        <div className="cell cell-2">
          <Select
            defaultValue={"firstPerson"}
            onChange={(change) => {
              console.log("change===\n", change);
              changeState(change.label, change.value, state.p2n, state.p2d);
            }}
            options={selection_options}
          />
        </div>
        <div className="cell cell-3">Second Person</div>
        <div className="cell cell-4">
          <Select
            defaultValue={"firstPerson"}
            onChange={(change) =>
              changeState(state.p1n, state.p1d, change.label, change.value)
            }
            options={selection_options}
          />
        </div>
      </div>
      <div className="person-selection">
        {!twoPersons && (
          <div className="person-card">
            <img
              className="person-card-img"
              alt={state.p1n}
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
                  alt={state.p1n}
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
                  alt={state.p2n}
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
          </>
        )}
      </div>
      <div className="slicer">
        <div className="slicer-choose-date">
          <div className="slicer-date">
            <div className="slicer-date-title">Date</div>
            <div className="slicer-date-option">
              <div className="slicer-date-from">
                <div className="slicer-date-from-title">From</div>
                <input
                  className="slicer-date-from-date"
                  type="date"
                  min="2019-01-01"
                  max="2021-12-31"
                  onChange={(e) => setFrom_Date(e.target.value)}
                  value={from_Date}
                />
              </div>
              <div className="slicer-date-from">
                <div className="slicer-date-from-title">To</div>
                <input
                  className="slicer-date-from-date"
                  type="date"
                  min="2019-01-01"
                  max="2021-12-31"
                  onChange={(e) => setTo_Date(e.target.value)}
                  value={to_Date}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slicer-opinion">
          <div className="slicer-opinion-title">Opinion</div>
          <div className="slicer-opinion-box">
            <div className="slicer-opinion-box1">
              <div className="checkbox-wrapper-31">
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  onChange={() => setPositiveReview(!positiveReview)}
                  checked={checked1}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              <div className="slicer-opinion-option">Positive</div>
            </div>
            <div className="slicer-opinion-box2">
              <div className="checkbox-wrapper-31">
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  onChange={() => setNeturalReview(!neturalReview)}
                  checked={checked2}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              <div className="slicer-opinion-option">Netural</div>
            </div>
            <div className="slicer-opinion-box3">
              <div className="checkbox-wrapper-31">
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  onChange={() => setNegativeReview(!negativeReview)}
                  checked={checked3}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              <div className="slicer-opinion-option">Negative</div>
            </div>
          </div>
        </div>
        <div className="slicer-language">
          <div className="slicer-language-title">Language</div>
          <div className="slicer-language-options">
            <form>
              <div className="multiselect">
                <div
                  className="selectBox"
                  onClick={() => setExpanded(!expanded)}
                >
                  <select>
                    <option>Choose Languages</option>
                  </select>
                  <div className="overSelect"></div>
                </div>
                <div className={display}>
                  <label className="language-options">
                    {languages_used.map((lan) => languages(lan))}
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const languages = (lan) => {
  return (
    <div className="languages">
      <div className="languages-name">{lan}</div>
      <div className="languages-option">
        <label className="rocker rocker-small">
          <input type="checkbox" />
          <span className="switch-left">Yes</span>
          <span className="switch-right">No</span>
        </label>
      </div>
    </div>
  );
};
export default PersonSelection;

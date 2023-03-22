import Select from "react-select";
import React, { useState } from "react";
import listData from "../services/listData";
import "./person_selection.css";
import {
  Get_Img_by_Fullname,
  Languages_used,
  Choose_person,
} from "../../pages/filtring_function";
const PersonSelection = ({
  firsthandle,
  secondhandle,
  person1_name,
  person2_name,
  twoPersons,
}) => {
  const [positiveReview, setPositiveReview] = useState(false);
  const [negativeReview, setNegativeReview] = useState(false);
  const [neturalReview, setNeturalReview] = useState(false);
  console.log("positiveReview==\n", positiveReview);
  console.log("negativeReview==\n", negativeReview);
  console.log("neturalReview==\n", neturalReview);
  const [to_Date, setTo_Date] = useState("");
  let person1;
  let person2;
  person2 = Get_Img_by_Fullname(person2_name);
  person1 = Get_Img_by_Fullname(person1_name);
  let languages_used = Languages_used(Choose_person(person1.Id)[0]);
  let selection_options = [];
  let language_selection_options = [];
  let language_options = [];
  let one_option = {};
  for (let i = 0; i < languages_used.length; i++) {
    one_option = {
      value: languages_used[i],
      label: languages(languages_used[i]),
    };
    language_options.push(one_option);
  }
  one_option = {};
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
          <div className="cell cell-2">
            <Select defaultValue={"firstPerson"} options={language_options} />
            <form>
              <div class="multipleSelection">
                {languages_used.map((lan) => languages(lan))}
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

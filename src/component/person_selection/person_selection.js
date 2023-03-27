import Select from "react-select";
import React, { useState } from "react";
import listData from "../services/listData";
import "./person_selection.css";
import {
  Get_Img_by_Fullname,
  Languages_used,
  Choose_person,
  removeDuplicates,
  Filter_data_by_language,
  Filter_by_languages,
  filtring,
} from "../../pages/filtring_function";
// secondhandle,
// person1_name,
// person2_name,
// twoPersons,
// changeState(p1n, p1d, p2n, p2d)
const PersonSelection = ({ state, changeState, conststate }) => {
  const [opinion, setOpinion] = useState({
    positive: true,
    netural: true,
    negative: true,
  });
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState({ from: "-", to: "-" });
  let twoPersons = false;
  let person1;
  let person2;
  let display = "show-checkboxes";
  expanded ? (display = "hide-checkboxes") : (display = "show-checkboxes");
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
  languages_used = removeDuplicates(languages_used_by_two);
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
  let int_selectedLanguages = {};
  for (let i = 0; i < languages_used.length; i++) {
    int_selectedLanguages[languages_used[i]] = true;
  }
  const [selectedLanguages, setSelectedLanguages] = useState(
    int_selectedLanguages
  );
  return (
    <>
      <div className="person-selection">
        <div className="select-two-persons">
          <div className="two-persons">
            <div className="two-persons-text">First Person</div>
          </div>
          <div className="select-persons">
            <Select
              defaultValue={"firstPerson"}
              onChange={(change) => {
                changeState(change.label, change.value, state.p2n, state.p2d);
              }}
              options={selection_options}
            />
          </div>
          <div className="two-persons">
            <div className="two-persons-text">Second Person</div>
          </div>
          <div className="select-persons">
            <Select
              defaultValue={"firstPerson"}
              onChange={(change) =>
                changeState(state.p1n, state.p1d, change.label, change.value)
              }
              options={selection_options}
            />
          </div>
        </div>
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

        <div className="slicer">
          <div></div>
          <div className="slicer-choose-date">
            <div className="slicer-date">
              <div className="slicer-date-title">Date</div>
              <div className="slicer-date-option">
                <div className="slicer-date-from">
                  <div className="slicer-date-from-title">From :</div>
                  <input
                    className="slicer-date-from-date"
                    type="date"
                    min="2000-01-01"
                    max="2024-12-31"
                    onChange={(e) =>
                      setDate({ from: e.target.value, to: date.to })
                    }
                    value={date.from}
                  />
                </div>
                <div className="slicer-date-from">
                  <div className="slicer-date-from-title">To :</div>
                  <input
                    className="slicer-date-from-date"
                    type="date"
                    min="2000-01-01"
                    max="2024-12-31"
                    onChange={(e) =>
                      setDate({ from: date.from, to: e.target.value })
                    }
                    value={date.to}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="slicer-opinion">
            <div className="slicer-opinion-title">Opinion</div>
            <div></div>
            <div className="slicer-opinion-box">
              <div className="slicer-opinion-box1">
                <div className="checkbox-wrapper-31">
                  <input
                    type="checkbox"
                    id="scales"
                    name="scales"
                    onChange={() =>
                      setOpinion({
                        positive: !opinion.positive,
                        netural: opinion.netural,
                        negative: opinion.negative,
                      })
                    }
                    checked={opinion.positive ? "checked" : ""}
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
                    onChange={() =>
                      setOpinion({
                        positive: opinion.positive,
                        netural: !opinion.netural,
                        negative: opinion.negative,
                      })
                    }
                    checked={opinion.netural ? "checked" : ""}
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
                    onChange={() =>
                      setOpinion({
                        positive: opinion.positive,
                        netural: opinion.netural,
                        negative: !opinion.negative,
                      })
                    }
                    checked={opinion.negative ? "checked" : ""}
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
                    Choose Languages
                  </div>
                  <div className={display}>
                    <label className="language-options">
                      {languages_used.map((lan) =>
                        Languages(lan, selectedLanguages, setSelectedLanguages)
                      )}
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </div>
        <div className="filtring-button">
          <div
            className="fancy"
            onClick={() => {
              console.log("conststate=\n", conststate);
              let x = filtring(
                date,
                opinion,
                conststate.p1d,
                selectedLanguages
              );
              let y = filtring(
                date,
                opinion,
                conststate.p2d,
                selectedLanguages
              );
              changeState(state.p1n, x, state.p2n, y);
            }}
          >
            <span className="top-key"></span>
            <span className="text">Buy Tickets</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </div>
        </div>
      </div>
    </>
  );
};
// ====================
// <button

// >
// Search
// </button>
// ====================
const Languages = (lan, selectedLanguages, setSelectedLanguages) => {
  let checked = "checked";
  if (!selectedLanguages[lan]) {
    checked = "";
  }
  return (
    <div className="languages">
      <div className="languages-name">{lan}</div>
      <div className="languages-option">
        <label className="rocker rocker-small">
          <input
            type="checkbox"
            onClick={(e) => {
              Change_selectedLanguages(
                lan,
                selectedLanguages,
                setSelectedLanguages
              );
            }}
            checked={checked}
          />
          <span className="switch-left">Yes</span>
          <span className="switch-right">No</span>
        </label>
      </div>
    </div>
  );
};
const Change_selectedLanguages = (
  lan,
  selectedLanguages,
  setSelectedLanguages
) => {
  var R = !selectedLanguages[lan];
  setSelectedLanguages((selectedLanguages) => ({
    ...selectedLanguages,
    ...(selectedLanguages[lan] = R),
  }));
};
export default PersonSelection;

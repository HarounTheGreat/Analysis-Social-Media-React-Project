import Select from "react-select";
import React, { useState } from "react";
import listData from "../services/listData";
import "./person_selection.css";
import {
  Choose_person,
  All_Languages_used,
  filtring,
} from "../../pages/filtring_function";
const PersonSelection = ({ state, changeState }) => {
  const [selectedPersons, setSelectedPersons] = useState({
    person1: Choose_person(state.p1n, state.p1n),
    person2: Choose_person(state.p2n, state.p2n),
  });
  const [opinion, setOpinion] = useState({
    positive: true,
    netural: true,
    negative: true,
  });
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState({ from: "-", to: "-" });
  let int_selectedLanguages = {};
  let twoPersons = false;
  let display = "show-checkboxes";
  let languages_used;
  let selection_options = [];
  let one_option = {};
  if (selectedPersons.person2 === undefined)
    languages_used = All_Languages_used(
      selectedPersons.person1.person_data,
      undefined
    );
  else
    languages_used = All_Languages_used(
      selectedPersons.person1.person_data,
      selectedPersons.person2.person_data
    );
  for (let i = 0; i < listData.length; i++) {
    one_option = {
      value: listData[i].Fullname,
      label: listData[i].Fullname,
    };
    selection_options.push(one_option);
  }
  twoPersons = selectedPersons.person2 !== undefined;
  for (let i = 0; i < languages_used.length; i++) {
    int_selectedLanguages[languages_used[i]] = true;
  }
  const [selectedLanguages, setSelectedLanguages] = useState(
    int_selectedLanguages
  );
  expanded ? (display = "hide-checkboxes") : (display = "show-checkboxes");
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
                let change1 = {
                  person1: Choose_person(change.label, change.label),
                  person2: selectedPersons.person2,
                };
                setSelectedPersons(change1);
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
              onChange={(change) => {
                let change2 = {
                  person1: selectedPersons.person1,
                  person2: Choose_person(change.label, change.label),
                };
                setSelectedPersons(change2);
              }}
              options={selection_options}
            />
          </div>
        </div>
        {!twoPersons && (
          <div className="person-card">
            <img
              className="person-card-img"
              alt={selectedPersons.person1.Fullname}
              src={selectedPersons.person1.Image}
            />
            <div className="person-card-desc">
              <div className="person-card-fullname">
                {selectedPersons.person1.Fullname}
              </div>
              <div className="person-card-title">
                {selectedPersons.person1.Status}
              </div>
              <div className="person-card-description">
                {selectedPersons.person1.Description}
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
                  alt={selectedPersons.person1.Fullname}
                  src={selectedPersons.person1.Image}
                />
                <div className="person-card-desc">
                  <div className="person-card-fullname">
                    {selectedPersons.person1.Fullname}
                  </div>
                  <div className="person-card-title">
                    {selectedPersons.person1.Status}
                  </div>
                  <div className="person-card-description">
                    {selectedPersons.person1.Description}
                  </div>
                </div>
              </div>
              <div className="vs">VS</div>
              <div className="person-card2">
                <img
                  className="person-card-img"
                  alt={selectedPersons.person2.Fullname}
                  src={selectedPersons.person2.Image}
                />
                <div className="person-card-desc">
                  <div className="person-card-fullname">
                    {selectedPersons.person2.Fullname}
                  </div>
                  <div className="person-card-title">
                    {selectedPersons.person2.Status}
                  </div>
                  <div className="person-card-description">
                    {selectedPersons.person2.Description}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="slicer">
          <div></div>
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
              changeState(
                selectedPersons.person1.Fullname,
                filtring(
                  date,
                  opinion,
                  selectedPersons.person1.person_data,
                  selectedLanguages
                ),
                selectedPersons.person2.Fullname,
                filtring(
                  date,
                  opinion,
                  selectedPersons.person2.person_data,
                  selectedLanguages
                )
              );
            }}
          >
            <span className="top-key"></span>
            <span className="text">Search</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </div>
        </div>
      </div>
    </>
  );
};
const Languages = (lan, selectedLanguages, setSelectedLanguages) => {
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
            checked={selectedLanguages[lan]}
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

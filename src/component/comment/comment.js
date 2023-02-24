import "./comment.css";
import React, { useState } from "react";

function Comment({ id, N, comment, Year, hour_z_time, an, Language }) {
  const [readMore, setReadMore] = useState(false);
  var operator = "netural";

  if (an === "P") {
    operator = "positive";
  } else if (an === "N") {
    operator = "negative";
  } else {
    operator = "netural";
  }
  console.log(operator);
  return (
    <div className="box">
      <div className="item-1">{N}</div>
      <div className={operator}>
        <div className="item-2">
          {readMore ? comment : `${comment.substring(0, 200)}...`}
          <button
            className="btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className="item-3">{Year}</div>
      </div>
    </div>
  );
}

export default Comment;

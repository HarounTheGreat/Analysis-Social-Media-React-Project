import "./comment.css";
import React, { useState } from "react";

function Comment({ id, N, comment, Year, hour_z_time, an, Language }) {
  console.log("N=", N);
  return (
    <div className="box">
      <div className="item-1">{N}</div>
      <div className="operetor">
        <div className="item-2">{comment}</div>
        <div className="item-3">{Year}</div>
      </div>
    </div>
  );
}

export default Comment;

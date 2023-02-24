import trump from "./data";
import "./comments.css";
import Comment from "../comment/comment";
import React, { useState } from "react";
function Comments() {
  return (
    <div className="comments">
      {trump.map((one_comment) => {
        return <Comment key={one_comment.N} {...one_comment}></Comment>;
      })}
    </div>
  );
}
export default Comments;

// const matList = trump_object.map((line) => (
//   <div className="box">
//     <div className="item-1">{line.N}</div>
//     <div className="item-2">
//       <p>{readMore ? line.comment : `${line.comment.substring(0, 100)}`}</p>
//       <button className="learn-more" onClick={() => setReadMore(!readMore)}>
//         {readMore ? "show less" : "show More"}
//       </button>
//     </div>
//     <div className="item-3">{line.Year}</div>
//   </div>
// ));

import trump from "../data/data";
import "../component/comment.css";
import React, { useState } from "react";
function Comment() {
  console.log(trump[0].comment);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="Comment">
      <h1>Haroun The Great</h1>
      <div className="comm">
        <Tabb trump_object={trump} />
        gfddf
      </div>
    </div>
  );
}
export default Comment;

const Tabb = ({ trump_object }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(trump_object);
  const matList = trump_object.map((line) => (
    <div className="box">
      <div className="item-1">{line.N}</div>
      <div className="item-2">
        <p>{readMore ? line.comment : `${line.comment.substring(0, 100)}`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "show More"}
        </button>
      </div>
      <div className="item-3">{line.Year}</div>
    </div>
  ));
  return <div className="card">{matList}</div>;
};

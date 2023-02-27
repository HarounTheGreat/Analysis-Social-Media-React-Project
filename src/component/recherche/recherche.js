import Comments from "../comments/Comments";
import "./recherche.css";
import React, { useState } from "react";

const Recherche = ({ trump }) => {
  const [search_comment, setSearch_comment] = useState("");
  let new_data;
  let test;
  new_data = trump;
  if (search_comment !== "") {
    for (let i = 0; i < trump.length; i++) {
      test = trump[i].comment.indexOf("You can download");
      if (test !== -1) {
        new_data.push(trump[i]);
      }
    }
  }

  return (
    <div className="recherche">
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Search Here" />
        </label>
        <hr />
        <button type="submit">Submit form</button>
      </form>
      <h1>recherche</h1>
      <Comments trump={trump} />
    </div>
  );

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    setSearch_comment(formJson.myInput);
  }
};

export default Recherche;

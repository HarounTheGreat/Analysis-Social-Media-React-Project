import Comments from "../comments/Comments";
import "./recherche.css";
import React, { useState } from "react";

const Recherche = ({ trump }) => {
  return (
    <div className="recherche">
      <Comments trump={trump} />
    </div>
  );
};

export default Recherche;

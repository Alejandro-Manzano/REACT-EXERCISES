import "./Figure.css";
import React from "react";

const Figure = ({ data }) => {
  return (
    <figure>
      <img src={data.url} alt={data.title} />
      <div className="window">
        <div className="title-bar">
          <span className="date">{data.date}</span>
          <h1 className="title">{data.title}</h1>
        </div>
        <div className="details-bar">
          <span className="text">{data.copyright}</span>
        </div>
        <div className="window-pane">{data.explanation}</div>
      </div>
    </figure>
  );
};

export default Figure;
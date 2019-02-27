import React from "react";

const TargetSummary = ({ target }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{target.title}</span>
        <p>Posted by {target.author || "Luis Montes"}</p>
        <span>{target.content}</span>
        <p className="grey-text" />
      </div>
    </div>
  );
};

export default TargetSummary;

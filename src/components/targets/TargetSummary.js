import React from "react";
import moment from "moment";

const TargetSummary = ({ target }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{target.title}</span>
        <p>
          Posted by {target.authorFirstName} {target.authorLastName}
        </p>
        <p className="grey-text">{moment(target.createdAt.toDate()).calendar()}</p>
        <span>{target.content}</span>
        <p className="grey-text" />
      </div>
    </div>
  );
};

export default TargetSummary;

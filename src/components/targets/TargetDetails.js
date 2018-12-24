import React from "react";

const TargetDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section target-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Target Title - {id}</span>
          <p>Lorem ipsum etc etc</p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Luis Montes</div>
          <div>23rd December, 8pm</div>
        </div>
      </div>
    </div>
  );
};

export default TargetDetails;

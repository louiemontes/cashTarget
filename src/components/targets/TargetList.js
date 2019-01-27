import React from "react";
import TargetSummary from "./TargetSummary";

const TargetList = ({ targets }) => {
  return (
    <div className="target-list section">
      {targets &&
        targets.map(target => {
          return <TargetSummary key={target.id} target={target} />;
        })}
    </div>
  );
};

export default TargetList;

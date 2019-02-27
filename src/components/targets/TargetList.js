import React from "react";
import TargetSummary from "./TargetSummary";
import { Link } from "react-router-dom";

const TargetList = ({ targets }) => {
  return (
    <div className="target-list section">
      {targets &&
        targets.map(target => {
          return (
            <Link to={`/target/${target.id}`} key={target.id}>
              <TargetSummary  target={target} />;
            </Link>
          );
        })}
    </div>
  );
};

export default TargetList;

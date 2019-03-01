import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const TargetDetails = props => {
  const id = props.match.params.id;
  const { target, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (target) {
    return (
      <div className="container section target-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Target Title - {target.title}</span>
            <p>{target.content}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {target.authorFirstName} {target.authorLastName}
            </div>
            <div>{moment(target.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <div className="card z-depth-0">
          <div className="card-content">
            <p>Loading project...</p>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const targets = state.firestore.data.targets;
  const target = targets ? targets[id] : null;
  return {
    target,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "targets"
    }
  ])
)(TargetDetails);

import React, { Component } from "react";
import Notifications from "./Notifications";
import TargetList from "../targets/TargetList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { targets, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <TargetList targets={targets} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    targets: state.firestore.ordered.targets,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "targets", limit: 5, orderBy: ['createdAt', 'desc'] },
    { collection: "notifications", limit: 10, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);

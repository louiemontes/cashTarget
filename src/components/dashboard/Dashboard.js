import React, { Component } from "react";
import Notifications from "./Notifications";
import TargetList from "../targets/TargetList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { targets } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <TargetList targets={targets} />
          </div>
          <div className="col s12 m5 offset-m1" />
          <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    targets: state.firestore.ordered.targets
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "targets" }])
)(Dashboard);

import React, { Component } from "react";
import Notifications from "./Notifications";
import TargetList from "../targets/TargetList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    //console.log(this.props);
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
    targets: state.target.targets
  };
};

export default connect(mapStateToProps)(Dashboard);

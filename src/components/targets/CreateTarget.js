import React, { Component } from "react";
import { connect } from "react-redux";
import { createTarget } from "../../store/actions/targetActions";
import { Redirect } from "react-router-dom";

class CreateTarget extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTarget(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gray-text text-darken-3">Create Target</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Target Content</label>
            <textarea
              id="content"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <button className="btn yellow darken-2 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTarget: target => dispatch(createTarget(target))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTarget);

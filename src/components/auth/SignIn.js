import React, { Component } from "react";

class SignIn extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <form onSubmit className="white">
          <h5 className="gray-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <label type="email" id="email" onChange />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <label htmlFor="" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

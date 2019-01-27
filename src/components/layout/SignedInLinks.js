import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Target</NavLink>
      </li>
      <li>
        <NavLink to="/">Log out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating yellow darken-2">
          LM
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;

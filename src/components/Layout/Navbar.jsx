import React from "react";
import "./Navbar.css";

const Navbar = ({onClickVisualization}) => {
  return (
    <nav class="App-header navbar navbar-dark ">
      <a class="navbar-brand" href="#">
        <img
          src={process.env.PUBLIC_URL + "/finditLogo.svg"}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        <strong>&nbsp;&nbsp;FindIT</strong>
      </a>
      <button
        onClick={() => onClickVisualization()}
        class="btn btn-secondary navbar-btn "

      >
        Visualize
      </button>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = ({ onClickVisualization, onClickClear }) => {
  return (
    <div className="App-header">
      <div className="logo-div">
        <img
          src={process.env.PUBLIC_URL + "/finditLogo.svg"}
          className="logo-img d-inline-block align-top"
          alt="FindIT"
        />
        <h3 className="logo-name">
          <strong>&nbsp;&nbsp;FindIT</strong>
        </h3>
      </div>

      <div className="btn-group-vertical floating-buttons">
        <button
          onClick={() => onClickVisualization()}
          className="btn btn-danger btn-visualization"
        >
          Visualize
        </button>
        <button
          onClick={() => onClickClear()}
          className="btn btn-secondary btn-clear"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Navbar;

/**<div className=" mx-auto">
        <button
          onClick={() => onClickVisualization()}
          className="btn btn-danger btn-visualization"
        >
          Visualize
        </button>
        <button
          onClick={() => onClickClear()}
          className="btn btn-secondary btn-clear"
        >
          Clear
        </button>
      </div>**/

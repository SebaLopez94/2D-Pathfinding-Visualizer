import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onClickVisualization, onClickClear }) => {
  return (
    <div className="App-header">
      <div className="logo">
        <img
          src={process.env.PUBLIC_URL + "/finditLogo.svg"}
          className="d-inline-block align-top"
          alt="FindIT"
        />
        <h3>
          <strong>&nbsp;&nbsp;FindIT</strong>
        </h3>
      </div>

      <div className="btn-group-vertical floating-buttons">
        <button
          onClick={() => onClickVisualization()}
          className="btn-danger btn-visualization"
          title='Start'
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button
          onClick={() => onClickClear()}
          className="btn-secondary btn-clear"
          title='Clear'
        >
          <FontAwesomeIcon icon={faTimes} />
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

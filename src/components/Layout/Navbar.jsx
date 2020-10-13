import React from "react";
import "./Navbar";

const Navbar = ({ onClickVisualization, onClickClear }) => {
  return (
    <nav className="App-header navbar navbar-dark ">

        <img
          src={process.env.PUBLIC_URL + "/finditLogo.svg"}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="FindIT" 
        />
        <h3 className="logo-name"><strong>&nbsp;&nbsp;FindIT</strong></h3>
     
      <div className=" mx-auto">
        <button
          onClick={() => onClickVisualization()}
          className="btn btn-danger btn-visualization"
        >
          Visualize
        </button>
        <button onClick={() => onClickClear()} className="btn btn-secondary btn-clear">
          Clear
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

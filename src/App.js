import React from "react";
import "./App.css";
import Grid from "./components/Grid.jsx";
import {isMobile} from 'react-device-detect';



function App() {
  if (!isMobile) {
    return (
      <div className="App">
        <Grid></Grid>
      </div>
    );
  }else{
    return (
      <div className="mobile-not-available">
        <h3>This content is unavailable on mobile</h3>
      </div>
    );
  }

}

export default App;

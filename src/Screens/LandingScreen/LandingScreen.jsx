import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingScreen extends Component {
  render() {
    return (
      <div>
        <h1>landing screen</h1>
        <Link to="/quiz">Quiz</Link>
      </div>
    );
  }
}

export default LandingScreen;

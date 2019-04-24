import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuizScreen extends Component {
  render() {
    return (
      <div>
        <h1>quiz screen</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default QuizScreen;

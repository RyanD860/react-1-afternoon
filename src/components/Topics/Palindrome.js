import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  palCheck(userInput) {
    let user = [];
    let reverse = [];
    let trueOrFalse;
    user = userInput;
    reverse = userInput
      .split("")
      .reverse()
      .join("");

    if (user === reverse) {
      trueOrFalse = "true";
    } else {
      trueOrFalse = "false";
    }

    this.setState({ palindrome: trueOrFalse });
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.palCheck(this.state.userInput)}
        >
          {" "}
          Check{" "}
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
      </div>
    );
  }
}

export default Palindrome;

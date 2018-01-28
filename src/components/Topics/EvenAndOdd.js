import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  inputChanger(val) {
    this.setState({ userInput: val });
  }

  evenOrOdd(userInput) {
    let userArr = userInput.split(",");
    let evens = [];
    let odds = [];

    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i] % 2 === 0) {
        evens.push(Number(userArr[i]));
      } else {
        odds.push(Number(userArr[i]));
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.inputChanger(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.evenOrOdd(this.state.userInput)}
        >
          {" "}
          Split{" "}
        </button>
        <span className="resultsBox">
          {" "}
          Evens: {JSON.stringify(this.state.evenArray)}{" "}
        </span>
        <span className="resultsBox">
          {" "}
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;

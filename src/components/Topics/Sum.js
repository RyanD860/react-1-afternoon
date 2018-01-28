import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      sum: null
    };
  }

  numberOneChange(val) {
    this.setState({ numberOne: parseInt(val, 10) });
  }

  numberTwoChange(val) {
    this.setState({ numberTwo: parseInt(val, 10) });
  }

  addNumbers() {
    let x = this.state.numberOne;
    let y = this.state.numberTwo;

    let added = x + y;

    this.setState({ sum: added });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={e => this.numberOneChange(e.target.value)}
        />
        <input
          className="inputLine"
          onChange={e => this.numberTwoChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.addNumbers()}
        />
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;

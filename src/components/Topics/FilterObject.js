import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        { name: "Jimmy Joe", title: "HackOr", age: 12 },
        { name: "Jeremy Schrader", age: 24, haircolor: "brown" },
        { name: "Carly Armstrong", title: "CEO" }
      ],
      userInput: "",
      filteredArray: []
    };
  }

  intputChanger(val) {
    this.setState({ userInput: val });
  }

  objectFilter(userInput) {
    let filt = [];
    let unfilt = this.state.unfilteredArray;

    for (let i = 0; i < unfilt.length; i++) {
      if (unfilt[i].hasOwnProperty(userInput)) {
        filt.push(unfilt[i]);
      }
    }

    this.setState({ filteredArray: filt });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {" "}
          Original {JSON.stringify(this.state.unfilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.intputChanger(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.objectFilter(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;

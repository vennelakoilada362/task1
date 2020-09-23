import React, { Component } from "react";

export default class Buttons extends Component {
  state = {
    i: 0,
  };

  render() {
    return (
      <div>
        <button onClick={this.props.previous} className="previous">
          Previous
        </button>
        <button onClick={this.props.submit} className="previous">
          Submit Answer
        </button>
        <button onClick={this.props.next} className="previous">
          Next
        </button>
        <button onClick={this.props.show} className="previous">
          Show Answer
        </button>
      </div>
    );
  }
}

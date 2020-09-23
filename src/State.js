import React, { Component } from "react";
import Buttons from "./Buttons";

export default class State extends Component {
  state = {
    questions: [
      {
        id: 1,
        question: "Who won the ICC ODI World Cup in 2011 ?",
        option1: "India",
        option2: "Australia",
        option3: "Others",
        answer: "India",
      },
      {
        id: 2,
        question: "What is the current year ?",
        option1: 2020,
        option2: 2018,
        option3: 2010,
        answer: 2020,
      },
      {
        id: 3,
        question: "what is the current month ?",
        option1: "June",
        option2: "September",
        option3: "May",
        answer: "September",
      },
    ],
    n: 0,
    show: false,
  };

  next = () => {
    if (this.state.n < this.state.questions.length - 1) {
      this.setState({ n: this.state.n + 1 });
    }
  };

  previous = () => {
    if (this.state.n > 0) {
      this.setState({ n: this.state.n - 1 });
    }
  };

  show = () => {
    if (this.state.show === true) {
      this.setState({ questions: this.state.questions[this.state.i].answer });
    } else {
      this.setState({});
    }
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.n + 1}.{this.state.questions[this.state.n].question}
          <label className="App">
            <h3>
              <input type="radio" value="opt1" name="option"></input>
              {this.state.questions[this.state.n].option1}
              <h3>
                <input type="radio" value="opt2" name="option"></input>
                {this.state.questions[this.state.n].option2}
              </h3>
              <input type="radio" value="opt3" name="option"></input>
              {this.state.questions[this.state.n].option3}
            </h3>
          </label>
        </h1>
        <Buttons next={this.next} previous={this.previous} show={this.show} />
        <h1>{this.state.questions[this.state.n].answer}</h1>
      </div>
    );
  }
}

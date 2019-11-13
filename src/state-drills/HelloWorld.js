import React from "react";

export default class HelloWorld extends React.Component {
  state = { who: "" };

  handleClick = word => {
    console.log(word);
  };

  render() {
    return (
      <div>
        {" "}
        <p>Hello, {this.state.who}</p>{" "}
        <button
          onClick={() => this.handleClick(this.setState({ who: "Friend" }))}
        >
          {" "}
          React{" "}
        </button>{" "}
        <button
          onClick={() => this.handleClick(this.setState({ who: "React" }))}
        >
          {" "}
          World{" "}
        </button>{" "}
        <button
          onClick={() => this.handleClick(this.setState({ who: "World" }))}
        >
          {" "}
          Friend{" "}
        </button>{" "}
      </div>
    );
  }
}

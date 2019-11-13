import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      count: new Date()
    });
  }
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  //   this.setInterval;
  // };
  render() {
    return (
      <div>
        <p>Time is {this.state.count.toLocaleTimeString()}ing.........</p>
      </div>
    );
  }
}

export default Bomb;

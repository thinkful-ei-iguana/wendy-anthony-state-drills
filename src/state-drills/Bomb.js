import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({ count: newCount });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //using seperate helper method
  renderCount() {
    if (this.state.count % 2 === 0 && this.state.count < 8) {
      return "Tick";
    } else if (this.state.count % 2 !== 0 && this.state.count < 8) {
      return "Tock";
    } else if (this.state.count >= 8) {
      this.componentWillUnmount();
      return "BOOM!!!";
    }
  }

  render() {
    return <div>{this.renderCount()}</div>;
  }
}
export default Bomb;

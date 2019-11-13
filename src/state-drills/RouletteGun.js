import React from "react";

class Gun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      bulletInChamber: this.props.bulletInChamber
    };
  }

  handleClick = () => {
    {
      this.setState({ spinningTheChamber: true });
      let timeout = setTimeout(() => {
        let chamber = Math.ceil(Math.random() * 8);
        this.setState({ chamber: chamber, spinningTheChamber: false });
      }, 2000);
      clearTimeout(timeout);
    }
  };

  renderAmIDead() {
    if (this.state.spinningTheChamber === true) {
      return "Spinning the chamber and pulling the trigger!";
    } else if (this.state.chamber !== this.state.bulletInChamber) {
      return "youre safe";
    } else if (this.state.chamber === this.state.bulletInChamber) {
      return "BANG!!!";
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderAmIDead()}</p>
        <button onClick={this.handleClick}>Pull The Trigger!</button>
      </div>
    );
  }
}
export default Gun;

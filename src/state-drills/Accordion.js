import React from "react";

class Accordion extends React.Component {
  state = {
    clicked: "hidden"
  };

  static defaultProps = { sections: [] };

  handleClick = () => {
    this.setState({ clicked: "display" });
    console.log(this.state);
    return <p key={this.props.sections.title}>{this.props.sections.content}</p>;
  };
  render() {
    const buttons = this.props.sections.map((section, index) => {
      return (
        <button key={index} onClick={this.handleClick}>
          {section.title}
        </button>
      );
    });
    const currentSection = this.props.sections[0];
    return (
      <div>
        <ul>
          <li>
            {buttons}
            <div className="content">{currentSection.content}</div>
          </li>
        </ul>
      </div>
    );
  }
}
export default Accordion;

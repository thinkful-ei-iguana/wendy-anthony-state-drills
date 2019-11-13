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

  renderButtons() {
    return this.props.sections.map((section, index) => (
      <button key={index} onClick={this.handleClick}>
        {section.title}
      </button>
    ));
  }

  renderContent() {
    const currentSection = this.props.sections[0];
    return (
      <ul>
        <li>
          {this.renderButtons}
          <div className="content">{currentSection.content}</div>
        </li>
      </ul>
    );
  }
}

export default Accordion;

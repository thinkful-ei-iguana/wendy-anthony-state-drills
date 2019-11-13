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
    return (
      <div>
        <ul>
          <li>
            {this.props.sections.map((section, index) => {
              return (
                <div key={index}>
                  <button key={index} onClick={this.handleClick}>
                    {section.title}
                  </button>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default Accordion;

import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./state-drills/Accordion";
import "./index.css";
const sections = [
  {
    title: "Section 1",
    content: "this is my first book."
  },
  {
    title: "Section 2",
    content: "second book!"
  },
  {
    title: "Section 3",
    content: "3rd"
  }
];

ReactDOM.render(
  <Accordion sections={sections} />,
  document.getElementById("root")
);

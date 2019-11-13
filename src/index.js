import React from "react";
import ReactDOM from "react-dom";
import Gun from "./state-drills/RouletteGun";
import "./index.css";

ReactDOM.render(<Gun bulletInChamber={8} />, document.getElementById("root"));

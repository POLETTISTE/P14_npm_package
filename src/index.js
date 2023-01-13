import React from "react";
import { render } from "react-dom";
import { Modal } from "./lib";

const App = () => (
  <Modal
    title="CONFIRMATION"
    text="Your employee has well been recorded !"
    btnText="CLOSE"
    // onClickFunction={}
  />
);

render(<App />, document.getElementById("root"));

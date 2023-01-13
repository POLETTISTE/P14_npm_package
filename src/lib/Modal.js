import React from "react";
import "./Modal.css";

const Modal = (props) => (
  <div className="modal-container">
    <div className="modal-window">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <button
        className="modal-btn"
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onclick={props.onclick}>
        {props.btnText}
      </button>
    </div>
  </div>
);
export default Modal;

import React from "react";
import "./Modal.css";

export const Modal = ({ title, text, btnText, onClickFunction }) => (
  <div className="modal-container">
    <div className="modal-window">
      <h2>{title}</h2>
      <p>{text}</p>
      <button className="modal-btn" onclick={onClickFunction}>
        {btnText}
      </button>
    </div>
  </div>
);

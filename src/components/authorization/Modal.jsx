import React from "react";
import "./style.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={`modal ${active ? "active" : ""}`}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={`modal_content ${active ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;

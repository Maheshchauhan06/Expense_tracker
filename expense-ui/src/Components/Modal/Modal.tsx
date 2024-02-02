import React, { Children } from "react";

interface Component {
  children: React.ReactNode;
}

const Modal: React.FC<Component> = (props) => {
  return (
    <div className="Modal-container">
      <div className="Modal">{props.children}</div>
    </div>
  );
};

export default Modal;

import React from "react";
import "./Buttons.css";

interface BtnProps {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  style?: object | undefined;
}

const Buttons: React.FC<BtnProps> = ({ label, type, disabled, style }) => {
  return (
    <button
      style={style}
      className="primaryBtn"
      type={type || "button"}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Buttons;

// src/components/button/Button.tsx
import React from "react";
import { ButtonProps } from "../../types/ButtonProps";
import { defaultButtonClass } from "../../styles/buttonStyles";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = defaultButtonClass,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;

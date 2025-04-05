import React from "react";
import { FormInputProps } from "../../types/FormInputProps"; // ✅ ایمپورت تایپ
import { defaultInputClass } from "../../styles/inputStyles";

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  maxLength,
  className = defaultInputClass,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      maxLength={maxLength}
    />
  );
};

export default FormInput;

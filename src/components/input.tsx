import React, { ChangeEvent } from "react";

interface InputProps {
  className: string;
  label: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  placeholder,
  onChange,
  errorMessage,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="errorMessage">{errorMessage}</p>
    </>
  );
};

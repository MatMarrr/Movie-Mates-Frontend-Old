import React, { ChangeEvent } from "react";

interface InputProps {
  className: string;
  label: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  placeholder,
  onChange,
  errorMessage,
  maxLength,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
      />
      <p className="errorMessage">{errorMessage}</p>
    </>
  );
};

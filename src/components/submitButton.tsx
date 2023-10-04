import React from "react";

interface SubmitButtonProps {
  className: string;
  text: string;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  className,
  text,
  disabled,
  onClick,
}) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

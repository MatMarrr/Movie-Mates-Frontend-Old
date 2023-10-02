interface InputProps {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

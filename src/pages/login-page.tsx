import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Input } from "../components/input";
import { SubmitButton } from "../components/submitButton";

export const LoginPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>("");
  const [allFilled, setAllFilled] = useState<boolean>(false);

  useEffect(() => {
    setAllFilled(!!login && password.length >= 8);
  }, [login, password]);

  const handleLoginChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLogin(event.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      console.log({ login, password });
      setLoginErrorMessage("Provided login data is incorrect");
    },
    [login, password]
  );

  return (
    <div className="loginPage">
      <div className="loginFormContainer">
        <Input
          className="loginPageInput"
          label="Login"
          placeholder="Login"
          onChange={handleLoginChange}
          maxLength={255}
        />
        <Input
          className="loginPageInput"
          label="Password"
          placeholder="Password"
          onChange={handlePasswordChange}
          errorMessage={loginErrorMessage}
          maxLength={255}
        />
        <SubmitButton
          className="loginPageSubmitButton"
          text="Login"
          disabled={!allFilled}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

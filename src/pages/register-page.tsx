import { Input } from "../components/input";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { SubmitButton } from "../components/submitButton";

export const RegisterPage = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [allFilled, setAllFilled] = useState<boolean>(false);

  useEffect(() => {
    setAllFilled(
      !!name && !!surname && !!login && !!password && !passwordError
    );
  }, [name, surname, login, password, passwordError]);

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const handleSurnameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSurname(event.target.value);
    },
    []
  );

  const handleLoginChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLogin(event.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const currentPassword = event.target.value;
      setPassword(currentPassword);
      const rules = [
        {
          id: "length",
          test: (str: string) => str.length < 8,
          message: "Password must be at least 8 characters long!",
        },
        {
          id: "uppercase",
          test: (str: string) => !/[A-Z]/.test(str),
          message: "Password must contain at least one uppercase letter!",
        },
        {
          id: "digit",
          test: (str: string) => !/\d/.test(str),
          message: "Password must contain at least one digit!",
        },
        {
          id: "specialChar",
          test: (str: string) =>
            !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str),
          message: "Password must contain at least one special character!",
        },
      ];

      const failedRule = rules.find((rule) => rule.test(currentPassword));

      if (failedRule) {
        setPasswordError(failedRule.message);
        return;
      }

      setPasswordError("");
    },
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      console.log({ name, surname, login, password });
    },
    [name, surname, login, password]
  );

  return (
    <div className="registerPage">
      <div className="registerFormContainer">
        <Input
          className="registerPageInput"
          label="Name"
          placeholder="Name"
          onChange={handleNameChange}
          maxLength={255}
        />
        <Input
          className="registerPageInput"
          label="Surname"
          placeholder="Surname"
          onChange={handleSurnameChange}
          maxLength={255}
        />
        <Input
          className="registerPageInput"
          label="Login"
          placeholder="Login"
          onChange={handleLoginChange}
          maxLength={255}
        />
        <Input
          className="registerPageInput"
          label="Password"
          placeholder="Password"
          onChange={handlePasswordChange}
          errorMessage={passwordError}
          maxLength={255}
        />
        <SubmitButton
          className="registerPageSubmitButton"
          text="Register"
          disabled={!allFilled}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

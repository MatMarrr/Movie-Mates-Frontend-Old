import { Input } from "../components/input";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { SubmitButton } from "../components/submitButton";
import axios from "axios";

export const RegisterPage = () => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [allFilled, setAllFilled] = useState<boolean>(false);

  useEffect(() => {
    setAllFilled(
      !!login &&
        !loginError &&
        !!email &&
        !emailError &&
        !!password &&
        !passwordError
    );
  }, [login, loginError, email, emailError, password, passwordError]);

  const handleLoginChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const currentLogin = event.target.value;
      setLogin(currentLogin);

      if (currentLogin.length <= 3) {
        setLoginError("Login needs to be at least 3 characters long");
        return;
      }

      setLoginError("");
    },
    []
  );

  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const currentEmail = event.target.value;
      setEmail(currentEmail);

      const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValidationRegex.test(currentEmail)) {
        setEmailError("Please enter a valid email address.");
        return;
      }

      setEmailError("");
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

  interface RegisterParams {
    login: string;
    email: string;
    password: string;
  }

  const registerUser = async (data: RegisterParams) => {
    try {
      const apiUrl = import.meta.env.VITE_MOVIE_MATES_API_URL;

      const response = await axios.post(`${apiUrl}/register`, {
        login: data.login,
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      registerUser({ login, email, password });
    },
    [login, email, password]
  );

  return (
    <div className="registerPage">
      <div className="registerFormContainer">
        <Input
          className="registerPageInput"
          label="Login"
          placeholder="Login"
          onChange={handleLoginChange}
          errorMessage={loginError}
          maxLength={255}
        />
        <Input
          className="registerPageInput"
          label="E-mail"
          placeholder="E-mail"
          onChange={handleEmailChange}
          errorMessage={emailError}
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

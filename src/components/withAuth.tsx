import { ReactElement, ComponentType } from "react";
import { Navigate } from "react-router-dom";

interface Props {}

export const withAuth = (Component: ComponentType<Props>) => {
  return (props: any): ReactElement => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
};

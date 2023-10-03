import { ReactElement, ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { isLoggedState } from "../RecoilStates";
import { useRecoilValue } from "recoil";

export const withAuth = (Component: ComponentType<any>) => {
  return (props: any): ReactElement => {
    const isLoggedIn = useRecoilValue(isLoggedState);

    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
};

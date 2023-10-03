import { atom } from "recoil";
import { ThemeType } from "./RecoilStatesTypes";

export const themeState = atom<ThemeType>({
  key: "themeState",
  default: "light",
});

export const isLoggedState = atom<boolean>({
  key: "loggedState",
  default: false,
});

import { themeState } from "../RecoilStates";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className="themeChangeSwitch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={changeTheme}
      />
      <span className="themeChangeSlider"></span>
    </label>
  );
};

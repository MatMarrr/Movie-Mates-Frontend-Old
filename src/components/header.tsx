import { useTheme } from "../ThemeContext";
import { useEffect } from "react";
export const Header = () => {

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        document.body.className = theme;
      }, [theme]);
      
  return (
    <div>
    Aktualny motyw: {theme}
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Przełącz motyw
    </button>
  </div>
  );
}
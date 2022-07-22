import { useThemeContext } from "../contexts/theme";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useThemeContext();

  return <button onClick={toggleTheme}>Change Theme</button>;
};

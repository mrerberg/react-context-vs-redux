import React, { useContext, useState, useCallback, useMemo } from "react";

export const themes = {
  light: {
    color: "#282c34",
    background: "#fff",
  },
  dark: {
    color: "#fff",
    background: "#282c34",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prev) =>
      prev === themes.dark ? themes.light : themes.dark
    );
  }, []);

  const value = useMemo(
    () => ({
      theme: currentTheme,
      toggleTheme,
    }),
    [currentTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) return theme.dark;

  return theme;
};

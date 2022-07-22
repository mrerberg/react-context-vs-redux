import { useState } from "react";

import { Page } from "./page";
import { ThemeSwitcher } from "./theme-switcher";
import { ThemeContext, themes } from "./contexts/theme";
import { IndependentComponent } from "./independent-component";

export const ContextExample = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ThemeSwitcher />
      <Page />
      <IndependentComponent />
    </ThemeContext.Provider>
  );
};

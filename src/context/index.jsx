import { useCallback, useMemo, useState } from "react";

import { Page } from "./page";
import { ThemeSwitcher } from "./theme-switcher";
import { ThemeContext, themes } from "./contexts/theme";
import { IndependentComponent } from "./independent-component";

export const ContextExample = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = useCallback(() => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  }, [currentTheme]);

  const sas = useMemo(
    () => ({ theme: currentTheme, toggleTheme }),
    [currentTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={sas}>
      <ThemeSwitcher />
      <Page />
      <IndependentComponent />
    </ThemeContext.Provider>
  );
};

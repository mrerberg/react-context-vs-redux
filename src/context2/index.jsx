import { Page } from "./page";
import { ThemeSwitcher } from "./theme-switcher";
import { ThemeProvider } from "./contexts/theme";
import { IndependentComponent } from "./independent-component";

export const ContextExample2 = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <Page />
      <IndependentComponent />
    </ThemeProvider>
  );
};

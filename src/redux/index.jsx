import { store } from "./store";
import { Provider } from "react-redux";

import { Page } from "./page";
import { ThemeSwitcher } from "./theme-switcher";
import { IndependentComponent } from "./independent-component";

export const ReduxExample = () => {
 

  return (
     <Provider store={store}>
      <ThemeSwitcher />
      <Page />
      <IndependentComponent />
    </Provider>
  );
};

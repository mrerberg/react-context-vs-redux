
import { useSelector } from "react-redux";
import {currentThemeValueSelector} from '../selectors/theme';

export const Page = () => {
  const theme = useSelector(currentThemeValueSelector);

  return (
    <div
      className="App-header"
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <h1>Its redux example!</h1>
    </div>
  );
};

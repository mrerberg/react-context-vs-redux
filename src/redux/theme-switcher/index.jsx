import {  useDispatch } from "react-redux";
import {toggleTheme} from '../reducers/theme';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(toggleTheme())

  return <button onClick={handleClick}>Change Theme</button>;
};

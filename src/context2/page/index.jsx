import { useThemeContext } from "../contexts/theme";

export const Page = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className="App-header"
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <h1>Its contexts2 example!</h1>
    </div>
  );
};

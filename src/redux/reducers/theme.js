import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  currentTheme: "dark",
  theme: themes.dark,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.currentTheme === 'dark') {
        state.theme = themes.light;
        state.currentTheme = "light";
        return;
      }

      state.theme = themes.dark;
      state.currentTheme = 'dark';
    },
  },
});

const { reducer, actions } = themeSlice;

export const { toggleTheme } = actions;

export default reducer;

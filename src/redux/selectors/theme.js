const themeStateSelector = (state) => state.theme;

export const currentThemeValueSelector = (state) => themeStateSelector(state).theme;
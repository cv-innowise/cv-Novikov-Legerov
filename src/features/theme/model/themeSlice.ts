import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "dark" | "light" | "system";

type ThemeState = {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "system",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      // localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
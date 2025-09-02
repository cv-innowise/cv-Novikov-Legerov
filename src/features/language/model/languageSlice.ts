import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Language = "en" | "ru";

type LanguageState = {
  language: Language;
}

const initialState: LanguageState = {
  language: (localStorage.getItem("language") as Language) || "ru",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
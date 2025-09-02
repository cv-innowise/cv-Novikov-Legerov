import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/model/themeSlice'
import languageReducer from '../features/language/model/languageSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
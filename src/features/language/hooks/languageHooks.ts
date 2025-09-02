import { selectLanguage } from "../model/languageSelector";
import { setLanguage, Language } from "../model/languageSlice";
import { useSelector, useDispatch } from "react-redux";

export const useTheme = () => {
  return useSelector(selectLanguage);
}

export const useSetTheme = () => {
  const dispatch = useDispatch();
  return (language: Language) => dispatch(setLanguage(language));
}
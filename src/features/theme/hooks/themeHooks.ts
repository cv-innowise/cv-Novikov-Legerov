import { selectTheme } from "../model/themeSelector";
import { setTheme, Theme } from "../model/themeSlice";
import { useSelector, useDispatch } from "react-redux";

export const useTheme = () => {
  return useSelector(selectTheme);
}

export const useSetTheme = () => {
  const dispatch = useDispatch();
  return (theme: Theme) => dispatch(setTheme(theme));
}
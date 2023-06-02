import { ReactNode } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import themeOptions from "./themeOptions";

interface Props {
  children: ReactNode;
}
const ThemeComponent = (props: Props) => {
  const { children } = props;

  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeComponent;

import { ThemeOptions, createTheme } from "@mui/material/styles";
import colors from "./scss/_themes-vars.module.scss";

const themeConfig: ThemeOptions = {
  palette: {
    primary: {
      main: colors.secondary200,
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
};

export default themeConfig;

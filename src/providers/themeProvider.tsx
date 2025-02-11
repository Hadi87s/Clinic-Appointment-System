import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Fredoka", serif',
    fontWeightBold: "600",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": { fontFamily: '"Fredoka", serif' },
          "& input": { fontFamily: '"Fredoka", serif' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Fredoka", serif',
        },
      },
    },
  },
});

interface IProps {
  children: React.ReactNode;
}

const GlobalThemeProvider = (props: IProps) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default GlobalThemeProvider;

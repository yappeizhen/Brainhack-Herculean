import { configureFonts, DefaultTheme } from "react-native-paper";

const fontConfig = {
  ios: {
    regular: {
      fontFamily: "System",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "System",
      fontWeight: "600",
    },
    light: {
      fontFamily: "System",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "System",
      fontWeight: "100",
    },
  },
  default: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: "#125270",
    secondary: "#81c9eb",
    accent: "#f0e0b9",
  },
};

export default theme;

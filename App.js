import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import MainScreen from "./src/screens/MainScreen";
import theme from "./src/Theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MainScreen />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

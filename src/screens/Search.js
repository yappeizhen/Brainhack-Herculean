import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title, withTheme } from "react-native-paper";

const SearchRoute = (props) => (
  <SafeAreaView style={styles.container}>
    <Title>Search for materials here!</Title>
  </SafeAreaView>
);
export default withTheme(SearchRoute);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

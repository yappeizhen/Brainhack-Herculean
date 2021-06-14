import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title, withTheme } from "react-native-paper";

const ChatRoute = (props) => (
  <SafeAreaView style={styles.container}>
    <Title>View your messages here!</Title>
  </SafeAreaView>
);
export default withTheme(ChatRoute);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
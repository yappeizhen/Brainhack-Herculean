import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title, withTheme } from "react-native-paper";

const UploadRoute = (props) => (
  <SafeAreaView style={styles.container}>
    <Title>Upload content here!</Title>
  </SafeAreaView>
);
export default withTheme(UploadRoute);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
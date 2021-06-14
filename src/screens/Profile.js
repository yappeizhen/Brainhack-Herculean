import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title, withTheme } from "react-native-paper";

const ProfileRoute = (props) => (
  <SafeAreaView style={styles.container}>
    <Title>This is my profile</Title>
  </SafeAreaView>
);
export default withTheme(ProfileRoute);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

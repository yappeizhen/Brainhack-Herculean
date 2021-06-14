import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const LibraryRoute = () => (
  <View>
    <Appbar.Header>
      <Appbar.Content title="My Library" />
      <Appbar.Action
        icon="magnify"
        onPress={() => console.log("Search library")}
      />
    </Appbar.Header>
  </View>
);

export default LibraryRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Appbar,
  Chip,
  Divider,
  Card,
  Title,
  Subheading,
  Paragraph,
  Caption,
} from "react-native-paper";
import { testingCenters } from "../assets/data/testingCenters";

const TestingCentersRoute = () => {
  const [selectedTestingCenter, setSelectedTestingCenter] = useState();

  const handleSelectedCard = (testingCenter) => {
    setSelectedTestingCenter(testingCenter);
  };

  const testingCentersDisplay = testingCenters.map((testingCenter) => {
    const cardStyle =
      selectedTestingCenter === testingCenter
        ? styles.selectedCard
        : styles.unselectedCard;
    return (
      <Card
        style={cardStyle}
        onPress={() => handleSelectedCard(testingCenter)}
      >
        <Subheading style={{ textAlign: "center" }}>
          {testingCenter.name}
        </Subheading>
      </Card>
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Healthcare Services" />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log("Search places")}
        />
      </Appbar.Header>
      <Divider />
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Title style={{ width: "100%", paddingLeft: 20 }}>
          Testing Centers
        </Title>
        {testingCentersDisplay}
      </ScrollView>
    </View>
  );
};

export default TestingCentersRoute;

const styles = StyleSheet.create({
  selectedCard: {
    flexDirection: "row",
    padding: "3%",
    width: "80%",
    height: 200,
    marginLeft: "6%",
    marginBottom: "5%",
    marginTop: 5,
    backgroundColor: "green",
  },
  scrollableSection: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  unselectedCard: {
    flexDirection: "row",
    padding: "3%",
    width: "80%",
    height: 200,
    marginLeft: "6%",
    marginBottom: "5%",
    marginTop: 5,
  },
  // dataPair: {
  //   width: "100%",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   paddingTop: 5,
  // },
  // dataValue: {
  //   alignItems: "center",
  //   fontWeight: "700",
  //   paddingRight: 10,
  // },
  // dataUnits: {
  //   paddingTop: 8,
  //   fontSize: 12,
  // },
});

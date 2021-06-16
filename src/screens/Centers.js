import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
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
  const [selectedTestingCenter, setSelectedTestingCenter] = useState(null);

  const handleSelectedCard = (testingCenter) => {
    setSelectedTestingCenter(testingCenter);
  };

  const getImgSrc = (selectedTestingCenter) => {
    if (selectedTestingCenter === null) {
      return "../images/419612.png";
    } else if (
      selectedTestingCenter.name === "Former Shu Qun Secondary School"
    ) {
      return "../images/609604.png";
    } else if (selectedTestingCenter.name === "Former Coral Primary School") {
      return "../images/518902.png";
    } else if (selectedTestingCenter.name === "Former Da Qiao Primary School") {
      return "../images/569185.png";
    } else if (selectedTestingCenter.name === "Former Bedok North Secondary") {
      return "../images/419612.png";
    }
  };

  const DisplayAnImage = () => {
    if (selectedTestingCenter === null) {
      return (
        <Image
          style={styles.image}
          source={require("../images/sg.png")}
        ></Image>
      );
    } else if (
      selectedTestingCenter.name === "Former Shu Qun Secondary School"
    ) {
      return (
        <Image
          style={styles.image}
          source={require("../images/609604.png")}
        ></Image>
      );
    } else if (selectedTestingCenter.name === "Former Coral Primary School") {
      return (
        <Image
          style={styles.image}
          source={require("../images/518902.png")}
        ></Image>
      );
    } else if (selectedTestingCenter.name === "Former Da Qiao Primary School") {
      return (
        <Image
          style={styles.image}
          source={require("../images/569185.png")}
        ></Image>
      );
    } else {
      return (
        <Image
          style={styles.image}
          source={require("../images/419612.png")}
        ></Image>
      );
    }
  };

  const testingCentersDisplay = testingCenters.map((testingCenter) => {
    const cardStyle =
      selectedTestingCenter === testingCenter
        ? styles.selectedCard
        : styles.unselectedCard;
    return (
      <Card style={cardStyle} onPress={() => handleSelectedCard(testingCenter)}>
        <Subheading style={{ textAlign: "center" }}>
          {testingCenter.name}
        </Subheading>
        <Divider />
        <View style={styles.address}>
          <Paragraph>{testingCenter.address}</Paragraph>
        </View>
      </Card>
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Testing Centers" />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log("Search places")}
        />
      </Appbar.Header>
      {DisplayAnImage()}
      <Divider style={styles.divider} />
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
    borderWidth: 2,
    borderColor: "green",
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
  address: {
    alignItems: "flex-end",
    marginBottom: -5,
    // marginRight: 50,
    paddingTop: 8,
  },
  divider: {
    borderWidth: 1,
  },
  image: {
    width: 300,
    height: 180,
    alignSelf: "center",
  },
});

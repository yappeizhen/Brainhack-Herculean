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
import { hospitals } from "../assets/data/hospitals";

const HospitalsRoute = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  const handleSelectedCard = (hospital) => {
    setSelectedHospital(hospital);
  };

  const DisplayAnImage = () => {
    if (selectedHospital === null) {
      return (
        <Image
          style={styles.image}
          source={require("../images/sg.png")}
        ></Image>
      );
    } else if (selectedHospital.name === "Singapore General Hospital") {
      return (
        <Image
          style={styles.image}
          source={require("../images/sgh.png")}
        ></Image>
      );
    } else if (selectedHospital.name === "Changi General Hospital") {
      return (
        <Image
          style={styles.image}
          source={require("../images/cgh.png")}
        ></Image>
      );
    } else if (selectedHospital.name === "National University Hospital") {
      return (
        <Image
          style={styles.image}
          source={require("../images/nuh.png")}
        ></Image>
      );
    } else {
      return (
        <Image
          style={styles.image}
          source={require("../images/tth.png")}
        ></Image>
      );
    }
  };

  const hospitalsDisplay = hospitals.map((hospital) => {
    const cardStyle =
      selectedHospital === hospital
        ? styles.selectedCard
        : styles.unselectedCard;
    return (
      <Card style={cardStyle} onPress={() => handleSelectedCard(hospital)}>
        <Subheading style={{ textAlign: "center" }}>{hospital.name}</Subheading>
        <Divider />
        <View style={styles.address}>
          <Paragraph>{hospital.address}</Paragraph>
        </View>
      </Card>
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Hospitals Near You" />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log("Search places")}
        />
      </Appbar.Header>
      {DisplayAnImage()}
      <Divider style={styles.divider} />
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Title style={{ width: "100%", paddingLeft: 20 }}>Hospitals</Title>
        {hospitalsDisplay}
      </ScrollView>
    </View>
  );
};

export default HospitalsRoute;

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

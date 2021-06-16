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
import { pharmacies } from "../assets/data/pharmacies";

const pharmaciesRoute = () => {
  const [selectedPharmacy, setSelectedpharmacy] = useState(null);

  const handleSelectedCard = (pharmacy) => {
    setSelectedpharmacy(pharmacy);
  };

  const DisplayAnImage = () => {
    if (selectedPharmacy === null) {
      return (
        <Image
          style={styles.image}
          source={require("../images/sg.png")}
        ></Image>
      );
    } else if (selectedPharmacy.name === "Unity Kallang Bahru") {
      return (
        <Image
          style={styles.image}
          source={require("../images/330071.png")}
        ></Image>
      );
    } else if (selectedPharmacy.name === "Farrer Park Pharmacy") {
      return (
        <Image
          style={styles.image}
          source={require("../images/217562.png")}
        ></Image>
      );
    } else if (selectedPharmacy.name === "Alchemy Pharmacy") {
      return (
        <Image
          style={styles.image}
          source={require("../images/510258.png")}
        ></Image>
      );
    } else {
      return (
        <Image
          style={styles.image}
          source={require("../images/527201.png")}
        ></Image>
      );
    }
  };

  const pharmaciesDisplay = pharmacies.map((pharmacy) => {
    const cardStyle =
      selectedPharmacy === pharmacy
        ? styles.selectedCard
        : styles.unselectedCard;
    return (
      <Card style={cardStyle} onPress={() => handleSelectedCard(pharmacy)}>
        <Subheading style={{ textAlign: "center" }}>{pharmacy.name}</Subheading>
        <Divider />
        <View style={styles.address}>
          <Paragraph>{pharmacy.address}</Paragraph>
        </View>
      </Card>
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Pharmacies" />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log("Search places")}
        />
      </Appbar.Header>
      {DisplayAnImage()}
      <Divider style={styles.divider} />
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Title style={{ width: "100%", paddingLeft: 20 }}>Pharmacies</Title>
        {pharmaciesDisplay}
      </ScrollView>
    </View>
  );
};

export default pharmaciesRoute;

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

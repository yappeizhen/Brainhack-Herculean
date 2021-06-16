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
  IconButton,
  Button,
} from "react-native-paper";
import CountryRoute from "./Country.js";
import {
  regions,
  asiaDataSet,
  europeDataSet,
} from "../../assets/data/destinationData";
import { createStackNavigator } from "@react-navigation/stack";
import database from "../../config/firebase";

const DestinationsRoute = ({ navigation }) => {
  const [selectedRegion, setSelectedRegion] = useState();
  const [allCountries, setAllCountries] = useState([]);
  const [countriesToView, setCountriesToView] = useState([]);
  const [pinned, setPinned] = useState([]);

  useEffect(() => {
    const ref = database.ref();
    ref
      .child("countries")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snapshots = snapshot.val();
          const countries = Object.keys(snapshots).map((key) => ({
            country: key,
            ...snapshots[key],
          }));
          console.log(countries);
          setAllCountries(countries);
          setCountriesToView(countries);
        }
      });
  }, []);

  const pinCountry = (country) => {
    setPinned([...pinned, country]);
    setCountriesToView([
      country,
      ...countriesToView.filter((item) => {
        return item !== country;
      }),
    ]);
  };

  const unpinCountry = (country) => {
    setPinned(
      pinned.filter((item) => {
        return item !== country;
      })
    );
    setCountriesToView([
      ...countriesToView.filter((item) => {
        return item !== country;
      }),
      country,
    ]);
  };

  var pinnedContains = (country) => {
    for (var i = 0; i < pinned.length; i++) {
      if (pinned[i] === country) {
        return true;
      }
    }
    return false;
  };

  const isPinnedCountry = (country) => {
    if (pinnedContains(country)) {
      return (
        <IconButton
          size={20}
          icon="pin"
          style={styles.pinIcon}
          onPress={() => unpinCountry(country)}
        />
      );
    }
    return (
      <IconButton
        size={20}
        icon="pin-outline"
        style={styles.pinIcon}
        onPress={() => pinCountry(country)}
      />
    );
  };

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    setCountriesToView(allCountries.filter((country) => (country.continent === region)));
  };

  const handleRefresh = () => {
    setSelectedRegion();
    let unpinnedCountries = allCountries.filter((country) => (!pinnedContains(country)));
    setCountriesToView(allCountries);
  }

  let regionsDisplay = regions.map((region) => {
    const regionChipStyle =
      selectedRegion === region ? styles.selectedChip : styles.unselectedChip;
    return (
      <Chip
        key={region}
        style={regionChipStyle}
        mode="outlined"
        onPress={() => handleSelectRegion(region)}
      >
        {region}
      </Chip>
    );
  });

  const countryDataDisplay = countriesToView.map((country) => {

    return (
      <TouchableOpacity key={country.country} style={styles.clickableContainer} onPress={() => navigation.navigate("CountryScreen", { country: country })}>
        <Card style={styles.topicCard}>
          <Subheading style={{ textAlign: 'center' }}>{country.country}</Subheading>
          <Divider />
          <View style={styles.dataPair}>
            <Subheading style={styles.dataValue}>{parseInt(country.casesPerDay)}</Subheading>
            <Paragraph style={styles.dataUnits}>Cases /day</Paragraph>
          </View>
          <View style={styles.dataPair}>
            <Subheading style={styles.dataValue}>{parseFloat(country.casesPer100k).toFixed(2)}</Subheading>
            <Paragraph style={styles.dataUnits}>Deaths /day</Paragraph>
          </View>
          <View style={styles.dataPair}>
            <Subheading style={styles.dataValue}>{parseFloat(country.percentageVaccinated).toFixed(1)}%</Subheading>
            <Paragraph style={styles.dataUnits}>Vaccinated</Paragraph>
          </View>
          {isPinnedCountry(country)}
        </Card>
      </TouchableOpacity>
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.section}>
        {regionsDisplay}
        <Button icon="refresh" onPress={handleRefresh} />
      </View>
      <Divider />
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Title style={{ width: "100%", paddingLeft: 20 }}>Countries</Title>
        {countryDataDisplay}
      </ScrollView>
    </View>
  );
};

function CustomNavigationBar({ navigation, previous }) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="World Updates" />
      <Appbar.Action
        icon="magnify"
        onPress={() => console.log("Search places")}
      />
    </Appbar.Header>
  );
}

const Stack = createStackNavigator();

export default function DestinationsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen name="DestinationsScreen" component={DestinationsRoute} />
      <Stack.Screen name="CountryScreen" component={CountryRoute} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  unselectedChip: {
    backgroundColor: "#f2f0e1",
    borderColor: `#FBA200`,
    margin: 3,
  },
  selectedChip: {
    backgroundColor: "#f2c9f0",
    borderColor: `#db9cd7`,
    borderWidth: 2,
    margin: 3,
  },
  section: {
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  scrollableSection: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  topicCard: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    width: 155,
    height: 180,
    marginLeft: "6%",
    marginBottom: "5%",
    marginTop: 5,
  },
  dataPair: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 5,
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  dataValue: {
    alignItems: "center",
    fontWeight: "700",
    paddingRight: 10,
  },
  dataUnits: {
    alignItems: "center",
    paddingTop: 2,
    fontSize: 12,
  },
  redDataUnits: {
    alignItems: "center",
    paddingTop: 2,
    fontSize: 12,
    color: "#e60000",
  },
  greenDataUnits: {
    alignItems: "center",
    paddingTop: 2,
    fontSize: 12,
    color: "#00b300",
  },
  changeRate: {
    alignItems: "flex-end",
    marginBottom: -5,
    marginRight: 50,
    paddingTop: 8,
  },
  pinIcon: {
    transform: [{ rotate: "20deg" }],
    alignSelf: "flex-end",
  },
});

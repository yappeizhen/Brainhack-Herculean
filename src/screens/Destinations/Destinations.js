import * as React from "react";
import { useState, useEffect } from "react";
<<<<<<< HEAD:src/screens/Destinations/Destinations.js
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar, Chip, Divider, Card, Title, Subheading, Paragraph, Caption } from "react-native-paper";
import CountryRoute from "./Country.js";
import { regions, asiaDataSet, europeDataSet } from "../../assets/data/destinationData";
import { createStackNavigator } from "@react-navigation/stack";

const DestinationsRoute = ({navigation}) => {

=======
import { ScrollView, View, StyleSheet } from "react-native";
import { Appbar, Chip, Divider, Card, Title, Subheading, Paragraph, IconButton, Button } from "react-native-paper";
import { regions, asiaDataSet, europeDataSet } from "./../assets/data/destinationData";
import database from "../config/firebase"

const DestinationsRoute = () => {
>>>>>>> 40d3e55717c88c45134015b89d81b3d873977c50:src/screens/Destinations.js
  const [selectedRegion, setSelectedRegion] = useState();
  const [countrySet, setCountrySet] = useState(asiaDataSet);
  const [pinned, setPinned] = useState([]);
  useEffect(() => {
    const ref = database.ref();
    ref.child("countries").get().then(snapshot => {
      if (snapshot.exists()) {
        const snapshots = snapshot.val()
        const countries = Object.keys(snapshots).map(key => ({ country: key, ...snapshots[key] }))
        console.log(countries)
      }
    })
  }, [])

  const pinCountry = (country) => {
    setPinned([...pinned, country])
    setCountrySet([country, ...countrySet.filter((item) => {
      return item !== country
    })]);
  }

  const unpinCountry = (country) => {
    setPinned(pinned.filter((item) => {
      return item !== country
    }));
    setCountrySet([...countrySet.filter((item) => {
      return item !== country
    }), country]);
  }

  var pinnedContains = (country) => {
    for (var i = 0; i < pinned.length; i++) {
      if (pinned[i] === country) {
        return true;
      }
    }
    return false;
  }

  const isPinnedCountry = (country) => {
    if (pinnedContains(country)) {
      return <IconButton size={20} icon="pin" style={styles.pinIcon} onPress={() => unpinCountry(country)} />
    }
    return <IconButton size={20} icon="pin-outline" style={styles.pinIcon} onPress={() => pinCountry(country)} />
  }

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    if (region.name === 'Asia') {
      setCountrySet(asiaDataSet)
    } else {
      setCountrySet(europeDataSet)
    }
  }

  let regionsDisplay = regions.map((region) => {
    const regionChipStyle = selectedRegion === region ? styles.selectedChip : styles.unselectedChip
    return (
      <Chip key={region.name} style={regionChipStyle} mode="outlined" onPress={() => handleSelectRegion(region)}>{region.name}</Chip>
    );
  })


  const countryDataDisplay = countrySet.map((country) => {
    let sign = country.casePercentageChange <= 0 ? "" : "+";
    let coloredStyle = country.casePercentageChange <= 0 ? styles.greenDataUnits : styles.redDataUnits;
    return (
<<<<<<< HEAD:src/screens/Destinations/Destinations.js
      <TouchableOpacity onPress={() => navigation.navigate("CountryScreen", {country:country})}>
        <Card key={country.name} style={styles.topicCard}>
          <Subheading style={{ textAlign: 'center' }}>{country.name}</Subheading>
          <Divider />
          <View style={styles.changeRate}>
            <Paragraph style={coloredStyle}>{sign}{country.casePercentageChange}%</Paragraph>
          </View>
          <View style={styles.dataPair}>
            <Subheading style={styles.dataValue}>{country.casesPerDay}</Subheading>
            <Paragraph style={styles.dataUnits}>Cases /day</Paragraph>
          </View>
          <View style={styles.dataPair}>
            <Subheading style={styles.dataValue}>{country.deathsPerDay}</Subheading>
            <Paragraph style={styles.dataUnits}>Deaths /day</Paragraph>
          </View>
          <View style={styles.dataPair}>
            <Subheading style={styles.dataValue}>{country.percentageVaccinated}%</Subheading>
            <Paragraph style={styles.dataUnits}>Vaccinated</Paragraph>
          </View>
        </Card>
        </TouchableOpacity>
=======
      <Card key={country.name} style={styles.topicCard}>
        <Subheading style={{ textAlign: 'center' }}>{country.name}</Subheading>
        <Divider />
        <View style={styles.changeRate}>
          <Paragraph style={coloredStyle}>{sign}{country.casePercentageChange}%</Paragraph>
        </View>
        <View style={styles.dataPair}>
          <Subheading style={styles.dataValue}>{country.casesPerDay}</Subheading>
          <Paragraph style={styles.dataUnits}>Cases /day</Paragraph>
        </View>
        <View style={styles.dataPair}>
          <Subheading style={styles.dataValue}>{country.deathsPerDay}</Subheading>
          <Paragraph style={styles.dataUnits}>Deaths /day</Paragraph>
        </View>
        <View style={styles.dataPair}>
          <Subheading style={styles.dataValue}>{country.percentageVaccinated}%</Subheading>
          <Paragraph style={styles.dataUnits}>Vaccinated</Paragraph>
        </View>
        {isPinnedCountry(country)}
      </Card>
>>>>>>> 40d3e55717c88c45134015b89d81b3d873977c50:src/screens/Destinations.js
    );
  })

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.section}>
        {regionsDisplay}
        <Button icon="refresh" onPress={() => setSelectedRegion()}/>
      </View>
      <Divider />
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Title style={{ width: '100%', paddingLeft: 20 }}>Countries</Title>
        {countryDataDisplay}
      </ScrollView>
    </View >
  );
}

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
    flexDirection: 'column',
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
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  scrollableSection: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  topicCard: {
    flexDirection: 'row',
    padding: '3%',
    width: '40%',
    height: 210,
    marginLeft: '6%',
    marginBottom: '5%',
    marginTop: 5,
  },
  dataPair: {
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
  },
  dataValue: {
    alignItems: 'center',
    fontWeight: '700',
    paddingRight: 10,
  },
  dataUnits: {
    paddingTop: 2,
    fontSize: 12,
  },
  redDataUnits: {
    paddingTop: 2,
    fontSize: 12,
    color: "#e60000",
  },
  greenDataUnits: {
    paddingTop: 2,
    fontSize: 12,
    color: "#00b300",
  },
  changeRate: {
    alignItems: 'flex-end',
    marginBottom: -5,
    marginRight: 50,
    paddingTop: 8,
  },
  pinIcon: {
    transform: [{ rotate: '20deg' }],
    alignSelf: 'flex-end'
  },
});

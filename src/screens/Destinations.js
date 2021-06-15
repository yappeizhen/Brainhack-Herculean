import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Appbar, Chip, Divider, Card, Title, Subheading, Paragraph, Caption } from "react-native-paper";
import { regions, asiaDataSet, europeDataSet } from "./../assets/data/destinationData";

const DestinationsRoute = () => {

  const [selectedRegion, setSelectedRegion] = useState();
  const [countrySet, setCountrySet] = useState(asiaDataSet);

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
      <Chip key={region.name} style={regionChipStyle} icon="chart-bell-curve" mode="outlined" onPress={() => handleSelectRegion(region)}>{region.name}</Chip>
    );
  })

  const countryDataDisplay = countrySet.map((country) => {
    let sign = country.casePercentageChange <= 0 ? "" : "+";
    let coloredStyle = country.casePercentageChange <= 0 ? styles.greenDataUnits : styles.redDataUnits;
    return (
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
    );
  })

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="World Updates" />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log("Search places")}
        />
      </Appbar.Header>
      <View style={styles.section}>
        {regionsDisplay}
        {/* <Chip style={styles.unselectedChip} icon="chart-bell-curve" mode="outlined" onPress={() => console.log('Pressed Chip')}>Economics</Chip>
        <Chip style={styles.selectedChip} icon="xml" mode="outlined" onPress={() => console.log('Pressed Chip')}>Computer Science</Chip>
        <Chip style={styles.unselectedChip} icon="hammer-screwdriver" mode="outlined" onPress={() => console.log('Pressed Chip')}>Mechanical Engineering</Chip> */}
      </View>
      <Divider />
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Title style={{ width: '100%', paddingLeft: 20 }}>Countries</Title>
        {countryDataDisplay}
      </ScrollView>
    </View >
  );
}

export default DestinationsRoute;

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
    height: 200,
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
  }
});

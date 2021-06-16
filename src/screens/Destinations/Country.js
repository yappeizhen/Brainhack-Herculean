import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import { Appbar, Divider, Card, Title, Subheading, Paragraph, Caption } from "react-native-paper";
import { regions, asiaDataSet, europeDataSet } from "../../assets/data/destinationData";
import { List } from 'react-native-paper';


const CountryRoute = ({navigation, route }) => {
 
  const {country} = route.params;
  let sign = country.casePercentageChange <= 0 ? "" : "+";
  let coloredStyle = country.casePercentageChange <= 0 ? styles.greenDataUnits : styles.redDataUnits;

  function countryDetailDisplay(country) {
    let sign = country.casePercentageChange <= 0 ? "" : "+";
    let coloredStyle = country.casePercentageChange <= 0 ? styles.greenDataUnits : styles.redDataUnits;
    return (
      <Card key={country.name} style={styles.topicCard}>
        <Subheading style={{ textAlign: 'center' }}>{country.name}</Subheading>
        <Divider />
        <Image
          style={styles.graphPic}
          source={{
            uri:
              'https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg',
          }}
        />
        <View style={[styles.container, {flexDirection: "row"}, {justifyContent:"space-around"}, {alignItems: "center",}]}>
        <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>{country.casesPerDay}</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>cases/day</Text>
                        </View>
                    </View>
        <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>{country.deathsPerDay}</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>deaths/day</Text>
                        </View>
                    </View>
                    <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>{country.percentageVaccinated}%</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>% vaccinated</Text>
                        </View>
                    </View>
                    </View>
      </Card>
    );
  }

  const MyComponent = (country) => {
    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);
  
    return (
      <List.Section title="Accordions">
        <List.Accordion
          title="Travel Safety Protocol"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title={country.proto.Rule1} />
          <List.Item title={country.proto.Rule2} />
          <List.Item title={country.proto.Rule3} />
        </List.Accordion>

        <List.Accordion
          title="Safe Distancing Measures"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title={country.proto.Rule1} />
          <List.Item title={country.proto.Rule2} />
          <List.Item title={country.proto.Rule3} />
        </List.Accordion>

        <List.Accordion
          title="Recommended Resources"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title={country.proto.Rule1} />
          <List.Item title={country.proto.Rule2} />
          <List.Item title={country.proto.Rule3} />
        </List.Accordion>
  
        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
  };

  return(
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Title style={{ width: '100%', paddingLeft: 20 }}>Countries</Title>
        {countryDetailDisplay(country)}
        <View style={[styles.accordions]}>
        <MyComponent style={{ width: '100%', paddingLeft: 20 }}></MyComponent>
        </View>
      </ScrollView>
    </View >
  )
  };


export default CountryRoute;

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
    width: '90%',
    height: 300,
    marginLeft: '6%',
    marginBottom: '5%',
    marginTop: 5,
  },
  graphPic: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 2,
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
  messageBox:{
    width:"25%",
    backgroundColor:"#fff",
  },
  messageBoxTitleText:{
    fontWeight:'bold',
    color:'#000',
    textAlign:'center',
    fontSize:20,
    marginBottom:10
  },
  messageBoxBodyText:{
    color:'#000',
    fontSize:16,
    textAlign:'center',
  },
  accordions: {
    height: 900,
    width: "100%",
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
});

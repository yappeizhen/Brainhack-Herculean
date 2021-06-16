import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Image, Icon, Text, ColorPropType} from "react-native";
import { Appbar, Divider, Card, Title, Caption, Paragraph, IconButton, Button, Subheading } from "react-native-paper";
import sgCrest from "./../assets/images/singapore-state-crest.png"
const ProfileRoute = () => {
  return (
    <View style={{ flex: 1 }}>
      <Card style={styles.topCard}>
      <View style={styles.top}>
        <Image style={styles.nationalCrest} source={sgCrest} />
          <Paragraph style={styles.country}>REPUBLIC OF SINGAPORE</Paragraph>
      </View>
      <View style={styles.top}>
      <Text style={styles.name}> CHOO BOON KEE </Text>
      <Text style={styles.name}> S1234567A // E9876543Z </Text>
      </View>
        </Card>
      <Divider />
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <View style={{width: '100%', flexDirection: "row",}}>
          <Title style={styles.sectionTitle}>Vaccination Status</Title>
        </View>
        <Card style={styles.statusCardRed}>
          <View style={styles.section}>
            <Subheading style={styles.cardTitle}>Waiting to take effect</Subheading>
            <Paragraph>Vaccination type: Moderna</Paragraph>
            <Paragraph>1st vaccine dose: 15/05/2021</Paragraph>
            <Paragraph>2nd vaccine dose: 12/06/2021</Paragraph>
            <Paragraph>Vaccination will be effective from 26/062021.</Paragraph> 
          </View>
        </Card>
        <View style={{width: '100%', flexDirection: "row",}}>
          <Title style={styles.sectionTitle}>COVID-19 Test Status</Title>
        </View>
        <Card style={styles.statusCard}>
          <View style={styles.section}>
            <Subheading style={styles.cardTitle}>COVID-19 Negative: 15/6/2021 23:24</Subheading>
            <Paragraph>You tested negative for the COVID-19 virus within a: </Paragraph>
            <View style={styles.textTile}>
            <IconButton color="green" style={{paddingLeft: 0}} icon="check" />
            <Paragraph style={{fontWeight:"bold"}}> 24h window. </Paragraph>
            </View>
            <View style={styles.textTile}>
            <IconButton color="green" style={{paddingLeft: 0}} icon="check" />
            <Paragraph style={{fontWeight:"bold"}}> 48h window. </Paragraph>
            </View>
            <View style={styles.textTile}>
            <IconButton color="red" style={{paddingLeft: 0}} icon="close" />
            <Paragraph style={{fontWeight:"bold"}}> 72h window. </Paragraph>
            </View>
          </View>
        </Card>
        <View style={{width: '100%', flexDirection: "row",}}>
          <Title style={styles.sectionTitle}>Travel History</Title>
        </View>
        <Card style={styles.statusCardGreen}>
          <View style={styles.section}>
            <Subheading style={styles.cardTitle}>Countries visited in the last 21 days:</Subheading>
            <Paragraph>N/A</Paragraph>
          </View>
        </Card>
      </ScrollView>
    </View >
  );
}
export default ProfileRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
  },
  section: {
    padding: 20,
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  topCard: {
    alignSelf: 'center',
    width: '100%',
  },
  top: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    width: "100%",
    height:100,
    justifyContent:'space-between',
  },
  scrollableSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    margin:15,
  },
  nationalCrest: {
    alignSelf: 'center',
    padding: 30,
    width: 100,
    height:100,
    resizeMode: 'contain',
  },
  countryContainer: {
    justifyContent: 'center',
  },
  country: {
    alignSelf: 'center',
    margin: 10,
    paddingBottom: 20,
    fontSize:20,
    fontWeight:"bold",
  },
  name:{
    alignSelf: 'flex-start',
    margin: 25,
    fontSize:20,
  },
  statusCard: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor:"#fff",
    marginBottom: 50,
  },
  statusCardRed: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor:"#ffcccb",
    marginBottom: 50,
  },
  statusCardGreen: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor:"#98fb98",
    marginBottom: 50,
  },
  textTile:{
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardTitle: {
    fontWeight: "600",
    paddingBottom: 10,
  },
  sectionTitle: {
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 10
  }
});

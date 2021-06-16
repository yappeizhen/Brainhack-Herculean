import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Image, Icon} from "react-native";
import { Appbar, Divider, Card, Title, Caption, Paragraph, IconButton, Button, Subheading } from "react-native-paper";
import sgCrest from "./../assets/images/singapore-state-crest.png"
const ProfileRoute = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image style={styles.nationalCrest} source={sgCrest} />
        <Paragraph style={styles.country}>Republic of Singapore</Paragraph>
      </View>
      <Divider />
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <View style={{width: '100%', flexDirection: "row",}}>
          <Title style={styles.sectionTitle}>Vaccination Status</Title>
          <IconButton style={{paddingLeft: 0}} icon="needle" />
        </View>
        <Card style={styles.statusCard}>
          <View style={styles.section}>
            <Subheading style={styles.cardTitle}>Waiting to take effect</Subheading>
            <Paragraph>You have completed all doses of the vaccine! Your vaccination will be effective from 26 June 2021.</Paragraph>
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
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  scrollableSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  nationalCrest: {
    alignSelf: 'center',
    width: 80,
    resizeMode: 'contain',
    marginTop: -50,
  },
  countryContainer: {
    justifyContent: 'center',
  },
  country: {
    alignSelf: 'center',
    marginTop: -70,
    paddingBottom: 20,
  },
  statusCard: {
    alignSelf: 'center',
    width: '90%',
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

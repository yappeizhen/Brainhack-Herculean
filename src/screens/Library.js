import * as React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Appbar, Chip, Divider, Card, Paragraph, Title, Subheading } from "react-native-paper";

const LibraryRoute = () => (
  <ScrollView>
    <Appbar.Header>
      <Appbar.Content title="My Library" />
      <Appbar.Action
        icon="magnify"
        onPress={() => console.log("Search library")}
      />
    </Appbar.Header>
    <View style={styles.section}>
      <Chip style={styles.unselectedChip} icon="chart-bell-curve" mode="outlined" onPress={() => console.log('Pressed Chip')}>Economics</Chip>
      <Chip style={styles.selectedChip} icon="xml" mode="outlined" onPress={() => console.log('Pressed Chip')}>Computer Science</Chip>
      <Chip style={styles.unselectedChip} icon="hammer-screwdriver" mode="outlined" onPress={() => console.log('Pressed Chip')}>Mechanical Engineering</Chip>
    </View>
    <Divider />
    <View style={styles.section}>
      <Title style={{ width: '100%' }}>Topics</Title>
      <Card style={styles.topicCard}>
        <Subheading style={{ textAlign: 'center' }}>Algorithms</Subheading>
        <Divider />
      </Card>
      <Card style={styles.topicCard}>
        <Subheading style={{ textAlign: 'center' }}>Algorithms</Subheading>
        <Divider />

      </Card>
      <Card style={styles.topicCard}>
        <Subheading style={{ textAlign: 'center' }}>Algorithms</Subheading>
        <Divider />

      </Card>
    </View>
  </ScrollView>
);

export default LibraryRoute;

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
    marginRight: '2%',
  },
  selectedChip: {
    backgroundColor: "#f2c9f0",
    borderColor: `#db9cd7`,
    borderWidth: 2,
    marginRight: '2%',
    marginBottom: '3%',
  },
  section: {
    padding: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10
  },
  topicCard: {
    padding: '3%',
    width: '40%',
    height: '100%',
    margin: '3%',
    marginTop: '5%',
  }
});

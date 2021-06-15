import * as React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Appbar, Chip, Divider, Card, Paragraph, Title, Subheading } from "react-native-paper";

const LibraryRoute = () => (
  <View style={{flex: 1}}>
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

    <ScrollView contentContainerStyle={styles.scrollableSection}>
      <Title style={{ width: '100%', paddingLeft: 20}}>Topics</Title>
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
      <Card style={styles.topicCard}>
        <Subheading style={{ textAlign: 'center' }}>Algorithms</Subheading>
        <Divider />

      </Card>
      
    </ScrollView>
  </View >
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
    margin: 7,
  },
  section: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  scrollableSection: {
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  topicCard: {
    flexDirection: 'row',
    padding: '3%',
    width: 135,
    height: 200,
    marginLeft: '7%',
    marginBottom: '5%',
    marginTop: 5,
  }
});

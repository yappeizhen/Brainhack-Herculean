import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import DestinationsScreen from "./Destinations/Destinations";
import { NavigationContainer } from "@react-navigation/native";
import PharmaciesScreen from "./Pharmacies";
import CentersScreen from "./Centers";
import HospitalsScreen from "./Hospitals";
import ProfileScreen from "./Profile";

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "destinations", title: "Updates", icon: "earth" },
    { key: "pharmacies", title: "Pharmacies", icon: "pill" },
    { key: "tests", title: "Test Centers", icon: "thermometer-low" },
    { key: "hospitals", title: "Hospitals", icon: "hospital-building" },
    { key: "status", title: "Status", icon: "account-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    destinations: DestinationsScreen,
    pharmacies: PharmaciesScreen,
    tests: CentersScreen,
    hospitals: HospitalsScreen,
    status: ProfileScreen,
  });

  return (
    <NavigationContainer>
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </NavigationContainer>
    
  );
};

export default Main;

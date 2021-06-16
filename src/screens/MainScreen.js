import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import DestinationsScreen from "./Destinations";
import SearchScreen from "./Search";
import CentersScreen from "./Centers";
import ChatScreen from "./Chat";
import ProfileScreen from "./Profile";

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "destinations", title: "Explore", icon: "earth" },
    { key: "search", title: "Browse", icon: "magnify" },
    { key: "centers", title: "Centers", icon: "upload-outline" },
    { key: "chat", title: "Chat", icon: "chat-outline" },
    { key: "profile", title: "Portfolio", icon: "account-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    destinations: DestinationsScreen,
    search: SearchScreen,
    centers: CentersScreen,
    chat: ChatScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Main;

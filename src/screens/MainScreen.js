import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import DestinationsScreen from "./Destinations/Destinations";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./Search";
import UploadScreen from "./Upload";
import ChatScreen from "./Chat";
import ProfileScreen from "./Profile";

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "destinations", title: "Explore", icon: "earth" },
    { key: "search", title: "Browse", icon: "magnify" },
    { key: "upload", title: "Upload", icon: "upload-outline" },
    { key: "chat", title: "Chat", icon: "chat-outline" },
    { key: "profile", title: "Portfolio", icon: "account-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    destinations: DestinationsScreen,
    search: SearchScreen,
    upload: UploadScreen,
    chat: ChatScreen,
    profile: ProfileScreen,
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

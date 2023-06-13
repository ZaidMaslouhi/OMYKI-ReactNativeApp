import React from "react";
import { Image } from "react-native";
import Colors from "../theme/colors";
import IconSettings from "../assets/icons/Settings.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Keychain from "../screens/Key Management/Keychain";
import Notifications from "../screens/Notifications/Notifications";
import Settings from "../screens/Settings/Settings";
import { Fonts } from "../theme/fonts";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Keychain"
      // activeColor={Colors.brand}
      // inactiveColor={Colors.neutral}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Keychain"
        component={Keychain}
        options={{
          tabBarActiveTintColor: Colors.brand,
          tabBarInactiveTintColor: Colors.neutral,
          tabBarLabel: "Keychain",
          tabBarLabelStyle: {
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font10,
            fontWeight: Fonts.Weight.bold,
          },
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/icons/keychain-tabBar.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarActiveTintColor: Colors.brand,
          tabBarInactiveTintColor: Colors.neutral,
          tabBarLabel: "Notifications",
          tabBarLabelStyle: {
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font10,
            fontWeight: Fonts.Weight.bold,
          },
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/icons/bell-notifications.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarActiveTintColor: Colors.brand,
          tabBarInactiveTintColor: Colors.neutral,
          tabBarLabel: "Settings",
          tabBarLabelStyle: {
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font10,
            fontWeight: Fonts.Weight.bold,
          },
          tabBarIcon: ({ color, size }) => <IconSettings />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;

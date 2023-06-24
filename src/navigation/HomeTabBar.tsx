import React from "react";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import Settings from "../screens/Settings/Settings";
import Keychain from "../screens/Key Management/Keychain";
import Notifications from "../screens/Notifications/Notifications";
import BellIcon from "../assets/icons/Bell.svg";
import SettingIcon from "../assets/icons/Setting.svg";
import KeychainIcon from "../assets/icons/Keychain.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Keychain"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingBottom: 5 },
        tabBarInactiveTintColor: Colors.neutral,
        tabBarActiveTintColor: Colors.brand,
        tabBarLabelStyle: {
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font10,
          fontWeight: Fonts.Weight.bold,
        },
      }}
    >
      <Tab.Screen
        name="Keychain"
        component={Keychain}
        options={{
          tabBarLabel: "Keychain",
          tabBarIcon: ({ color }) => (
            <KeychainIcon stroke={color} strokeWidth={1.5} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarBadge: "",
          tabBarBadgeStyle: {
            maxWidth: 5,
            maxHeight: 8,
            backgroundColor: Colors.danger,
          },
          tabBarIcon: ({ color }) => (
            <BellIcon stroke={color} strokeWidth={1.5} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <SettingIcon stroke={color} strokeWidth={1.5} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;

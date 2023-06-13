import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import ActionBar from "../../components/ActionBar";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import SettingsNavItem from "../../components/SettingsNavItem";
import { useNavigation } from "@react-navigation/native";
import RootStackParamList from "../../interfaces/RootList";

const SettingsNavItems = [
  {
    title: "Key management",
    icon: require("../../assets/icons/key-management-settings.png"),
    color: Colors.dark,
    navigate: "KeyManagement" as keyof RootStackParamList,
  },
  {
    title: "General settings",
    icon: require("../../assets/icons/settings.png"),
    color: Colors.dark,
    navigate: "GeneralSettings" as keyof RootStackParamList,
  },
  {
    title: "Support",
    icon: require("../../assets/icons/support.png"),
    color: Colors.dark,
    navigate: "Home" as keyof RootStackParamList,
  },
  {
    title: "Sign out",
    icon: require("../../assets/icons/Sign-out.png"),
    color: Colors.danger,
    navigate: "SignIn" as keyof RootStackParamList,
  },
];

function Settings() {
  const navigation = useNavigation();

  return (
    <>
      <ActionBar title="Settings" />

      <View style={{ gap: 8, padding: 16 }}>
        <View style={{ flexDirection: "row", gap: 16, paddingVertical: 16 }}>
          <View style={{ height: 46, width: 46, borderRadius: 16 }}>
            <Image source={require("../../assets/icons/profile.png")} />
          </View>
          <View style={{ gap: 8 }}>
            <Text
              style={{
                color: Colors.dark,
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font16,
                fontWeight: Fonts.Weight.bold,
              }}
            >
              James Hall
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("MyDetails")}>
              <Text
                style={{
                  color: Colors.brand,
                  fontFamily: Fonts.Family.brand,
                  fontSize: Fonts.Size.font14,
                }}
              >
                My details
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ borderWidth: 1, borderColor: Colors.dark100 }}></View>

        <FlatList
          data={SettingsNavItems}
          renderItem={({ item, index }) => (
            <SettingsNavItem
              key={index}
              title={item.title}
              icon={item.icon}
              color={item.color}
              onPress={() => navigation.navigate(item.navigate)}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ borderWidth: 1, borderColor: Colors.dark100 }} />
          )}
        />
      </View>
    </>
  );
}

export default Settings;

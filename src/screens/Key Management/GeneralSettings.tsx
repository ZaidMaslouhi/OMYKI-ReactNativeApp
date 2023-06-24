import React, { useState, useEffect } from "react";
import { Switch, Text, View } from "react-native";
import ActionBar from "../../components/ActionBar";
import SettingsNavItem from "../../components/SettingsNavItem";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";
import BinIcon from "../../assets/icons/Bin.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

type GeneralSettings = {
  openingNearby: boolean;
  notifications: boolean;
};
const generalSettings: GeneralSettings = {
  openingNearby: false,
  notifications: false,
};

function GeneralSettings() {
  const navigation = useNavigation();
  const [switchStates, setSwitchStates] =
    useState<GeneralSettings>(generalSettings);

  const toggleSwitch = (property: keyof GeneralSettings) => {
    saveGeneralSettings(switchStates);
    setSwitchStates((prevSwitchStates) => ({
      ...prevSwitchStates,
      [property]: !prevSwitchStates[property],
    }));
  };

  const getGeneralSetting = async () => {
    AsyncStorage.getItem("@GeneralSettings").then((GeneralSettingsJSON) => {
      const generalSettingsData = GeneralSettingsJSON
        ? JSON.parse(GeneralSettingsJSON)
        : generalSettings;
      setSwitchStates(generalSettingsData);
    });
  };

  const saveGeneralSettings = async (settings: GeneralSettings) => {
    await AsyncStorage.setItem("@GeneralSettings", JSON.stringify(settings));
  };

  useEffect(() => {
    getGeneralSetting();
  }, []);

  useEffect(() => {
    saveGeneralSettings(switchStates);
  }, [switchStates]);

  return (
    <>
      <ActionBar
        title="General settings"
        withBack={true}
        onPress={() => navigation.goBack()}
      />

      <View style={{ gap: 8, padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          <View>
            <Text
              style={{
                color: Colors.dark,
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font14,
                fontWeight: Fonts.Weight.semi,
              }}
            >
              Opening Nearby
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{ false: Colors.dark100, true: Colors.brand }}
              thumbColor={Colors.white}
              ios_backgroundColor={Colors.dark100}
              value={switchStates.openingNearby}
              onValueChange={() => toggleSwitch("openingNearby")}
            />
          </View>
        </View>

        <View style={{ borderWidth: 1, borderColor: Colors.dark100 }}></View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          <View>
            <Text
              style={{
                color: Colors.dark,
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font14,
                fontWeight: Fonts.Weight.semi,
              }}
            >
              Notifications
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{ false: Colors.dark100, true: Colors.brand }}
              thumbColor={Colors.white}
              ios_backgroundColor={Colors.dark100}
              value={switchStates.notifications}
              onValueChange={() => toggleSwitch("notifications")}
            />
          </View>
        </View>

        <View style={{ borderWidth: 1, borderColor: Colors.dark100 }}></View>

        <SettingsNavItem
          title={"Delete account"}
          color={Colors.danger}
          icon={<BinIcon stroke={Colors.danger} strokeWidth={1.5} />}
          onPress={() => () => {}}
        />
      </View>
    </>
  );
}

export default GeneralSettings;

import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import ActionBar from "../../components/ActionBar";
import SettingsNavItem from "../../components/SettingsNavItem";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

type GeneralSettings = {
  openingNearby: boolean;
  notifications: boolean;
};

function GeneralSettings() {
  const [switchStates, setSwitchStates] = useState<GeneralSettings>({
    openingNearby: false,
    notifications: true,
  });

  const toggleSwitch = (property: keyof GeneralSettings) => {
    setSwitchStates((prevSwitchStates) => ({
      ...prevSwitchStates,
      [property]: !prevSwitchStates[property],
    }));
  };

  return (
    <>
      <ActionBar
        title="General settings"
        withBack={true}
        onPress={() => () => {}}
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
          color={Colors.danger}
          title={"Delete account"}
          icon={require("../../assets/icons/bin.png")}
          onPress={() => () => {}}
        />
      </View>
    </>
  );
}

export default GeneralSettings;

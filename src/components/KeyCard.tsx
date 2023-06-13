import React from "react";
import { Text, Image, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function KeyCard({
  keyName,
  isLocked,
  isNearby,
}: {
  keyName: string;
  isLocked: boolean;
  isNearby: boolean;
}) {
  return (
    <View
      style={{
        width: "45%",
        padding: 16,
        margin: 8,
        gap: 8,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: Colors.dark100,
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {isLocked ? (
          <Image source={require("../assets/icons/locked.png")} />
        ) : (
          <Image source={require("../assets/icons/unlocking.png")} />
        )}

        {isNearby && (
          <View style={{ flexDirection: "row", gap: 4, opacity: 0.5 }}>
            <Image source={require("../assets/icons/navigation.png")} />
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font10,
                color: Colors.brand,
              }}
            >
              Nearby
            </Text>
          </View>
        )}
      </View>
      <Text
        style={{
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font16,
          fontWeight: Fonts.Weight.semi,
          color: Colors.dark,
        }}
      >
        {keyName}
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font10,
          fontWeight: Fonts.Weight.semi,
          color: isLocked ? Colors.brand : Colors.success,
        }}
      >
        {isLocked ? "Locked" : "Unlocking"}
      </Text>
    </View>
  );
}

export default KeyCard;

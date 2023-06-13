import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function KeyManagmentItem({
  accessKey,
  appartments,
  devices,
  members,
}: {
  accessKey: string;
  appartments: number;
  devices: number;
  members: { uri: ImageSourcePropType }[];
}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        borderColor: Colors.dark100,
        borderWidth: 1,
        borderRadius: 16,
        padding: 16,
      }}
    >
      <View style={{ gap: 24 }}>
        <View style={{ gap: 4 }}>
          <Text
            style={{
              color: Colors.dark,
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font18,
            }}
          >
            {accessKey}
          </Text>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <Text
              style={{
                color: Colors.neutral,
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font12,
              }}
            >
              {appartments} Appartments
            </Text>
            <Text
              style={{
                color: Colors.neutral,
                fontFamily: Fonts.Family.brand,
              }}
            >
              |
            </Text>
            <Text
              style={{
                color: Colors.neutral,
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font12,
              }}
            >
              {devices} Devices
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            {members.map((member, index) => (
              <Image
                key={index}
                source={member.uri}
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 24 / 2,
                  borderWidth: 1,
                  borderColor: Colors.white,
                  backgroundColor: Colors.white,
                  marginLeft: !index ? -2 : -9,
                }}
              />
            ))}
          </View>
          <Text
            style={{
              color: Colors.neutral,
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font12,
            }}
          >
            {members.length} members
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Image source={require("../assets/icons/chevron-right.png")} />
      </View>
    </View>
  );
}

export default KeyManagmentItem;

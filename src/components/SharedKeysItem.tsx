import React from "react";
import { Image, Text, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import User from "../interfaces/User";

function SharedKeysItem({
  accessKey,
  user,
}: {
  accessKey: string;
  user: User;
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
      <View style={{ gap: 16 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Image
            source={user.image}
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
          />
          <View style={{ gap: 4 }}>
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font14,
                color: Colors.dark,
              }}
            >
              {user.fullName}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font12,
                color: Colors.neutral,
              }}
            >
              {user.email}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: Colors.dark,
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font12,
              backgroundColor: Colors.brand + "10",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 10,
            }}
          >
            Permanent access
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Image source={require("../assets/icons/trash.png")} />
      </View>
    </View>
  );
}

export default SharedKeysItem;

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function ActionBar({
  title,
  withBack,
  onPress,
}: {
  title: string;
  withBack?: boolean;
  onPress?: () => {};
}) {
  return (
    <View
      style={{
        height: 110,
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 5,
        padding: 16,
        backgroundColor: Colors.brand,
      }}
    >
      {withBack && (
        <TouchableOpacity onPress={onPress}>
          <Image source={require("../assets/icons/arrow-left.png")} />
        </TouchableOpacity>
      )}
      <Text
        style={{
          color: Colors.white,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font20,
          fontWeight: Fonts.Weight.bold,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default ActionBar;

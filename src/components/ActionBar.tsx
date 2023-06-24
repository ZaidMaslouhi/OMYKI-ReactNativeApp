import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import ArrowLeftIcon from "../assets/icons/ArrowLeft.svg";

function ActionBar({
  title,
  withBack,
  onPress,
}: {
  title: string;
  withBack?: boolean;
  onPress?: () => void;
}) {
  return (
    <View
      style={{
        height: 60,
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 5,
        padding: 16,
        backgroundColor: Colors.brand,
      }}
    >
      {withBack && (
        <TouchableOpacity onPress={onPress}>
          <ArrowLeftIcon stroke={Colors.white} strokeWidth={1.5} />
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

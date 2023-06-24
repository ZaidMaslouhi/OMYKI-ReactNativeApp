import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Fonts } from "../theme/fonts";
import Colors from "../theme/colors";

function SettingsNavItem({
  title,
  icon,
  color,
  onPress,
}: {
  title: string;
  icon: JSX.Element;
  color?: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
      }}
      onPress={onPress}
    >
      <View>
        <Text
          style={{
            color: color ?? Colors.dark,
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font14,
            fontWeight: Fonts.Weight.semi,
          }}
        >
          {title}
        </Text>
      </View>
      <View>{icon}</View>
    </TouchableOpacity>
  );
}

export default SettingsNavItem;

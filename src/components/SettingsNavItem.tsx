import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Fonts } from "../theme/fonts";

function SettingsNavItem({
  title,
  icon,
  color,
  onPress,
}: {
  title: string;
  icon: ImageSourcePropType;
  color: string;
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
            color: color,
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font14,
            fontWeight: Fonts.Weight.semi,
          }}
        >
          {title}
        </Text>
      </View>
      <View>
        <Image source={icon} />
      </View>
    </TouchableOpacity>
  );
}

export default SettingsNavItem;

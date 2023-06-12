import React from "react";
import Colors from "../theme/colors";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";
import { Fonts } from "../theme/fonts";

function Button({
  title,
  primary,
  outline,
  icon,
  onPress,
}: {
  title: String;
  primary?: boolean;
  outline?: boolean;
  icon?: ImageSourcePropType;
  onPress: () => {};
}) {
  return (
    <TouchableOpacity
      style={{
        gap: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: primary && outline ? Colors.brand : Colors.dark100,
        backgroundColor:
          primary && !outline
            ? Colors.brand
            : outline
            ? "transparent"
            : Colors.white,
      }}
      onPress={onPress}
    >
      {icon && <Image source={icon} />}
      <Text
        style={{
          color:
            primary && !outline
              ? Colors.white
              : outline
              ? Colors.brand
              : Colors.dark,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font16,
          fontWeight: Fonts.Weight.bold,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;

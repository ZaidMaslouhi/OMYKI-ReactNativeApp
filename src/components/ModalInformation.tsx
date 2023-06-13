import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import Button from "./Button";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function ModalInformation({
  icon,
  title,
  description,
  buttonText,
  onPressButton,
}: {
  icon: ImageSourcePropType;
  title: string;
  description: string;
  buttonText?: string;
  onPressButton: () => void;
}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        paddingHorizontal: 16,
      }}
    >
      <Image source={icon} />

      <Text
        style={{
          color: Colors.dark,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font20,
          fontWeight: Fonts.Weight.bold,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: Colors.neutral,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font14,
          textAlign: "center",
        }}
      >
        {description}
      </Text>

      {buttonText && (
        <Button title={buttonText} primary onPress={onPressButton} />
      )}
    </View>
  );
}

export default ModalInformation;

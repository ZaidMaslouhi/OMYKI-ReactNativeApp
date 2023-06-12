import React, { ReactElement, ReactNode } from "react";
import { View, Text } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function FormInput({
  label,
  icon,
  children,
}: {
  label: string;
  children: ReactElement;
  icon?: ReactNode;
}) {
  return (
    <View style={{ gap: 10 }}>
      <Text
        style={{
          color: Colors.dark,
          fontFamily: Fonts.Family.brand,
        }}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          height: 55,
          borderWidth: 2,
          borderColor: Colors.dark100,
          borderRadius: 16,
          backgroundColor: Colors.white,
          paddingHorizontal: 16,
          paddingVertical: 18,
          overflow: "hidden",
        }}
      >
        {icon && icon}
        {children}
      </View>
    </View>
  );
}

export default FormInput;

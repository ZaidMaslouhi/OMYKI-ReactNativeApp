import React, { ReactElement, ReactNode } from "react";
import { View, Text } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function FormInput({
  label,
  icon,
  errorMessage,
  children,
}: {
  label: string;
  icon?: ReactNode;
  errorMessage?: string;
  children: ReactElement;
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
      <View style={{ gap: 8 }}>
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
        {errorMessage && (
          <Text style={{ color: Colors.danger, fontSize: Fonts.Size.font12 }}>
            {errorMessage}
          </Text>
        )}
      </View>
    </View>
  );
}

export default FormInput;

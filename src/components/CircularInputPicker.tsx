import React, { useState } from "react";
import { View, Text } from "react-native";
import { Fonts } from "../theme/fonts";
// import { CircularSlider } from "react-native-circular-slider";

const CircularInputPicker = () => {
  const value = useState(0)[0];

  return (
    <View>
      <Text
        style={{
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font24,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        {value}0:00
      </Text>
      {/* <CircularSlider
        value={value}
        onValueChange={onValueChange}
        minimumValue={0}
        maximumValue={100}
        strokeWidth={8}
        radius={100}
        gradientColorFrom="#ff0000"
        gradientColorTo="#00ff00"
        showValueText
        valueTextFontSize={24}
        backgroundColor="#d3d3d3"
      /> */}
    </View>
  );
};

export default CircularInputPicker;

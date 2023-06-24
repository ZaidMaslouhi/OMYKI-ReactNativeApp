import React, { useState } from "react";
import { View, Text } from "react-native";
import { Fonts } from "../theme/fonts";
// import { CircularSlider } from 'react-native-circular-slider';
// import CircleSlider from "react-native-circle-slider";
import CircleSlider from "./CircularSlider";
import Colors from "../theme/colors";

const CircularInputPicker = () => {
  const [value, setValue] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        width: "100%",
      }}
    >
      <CircleSlider
        value={value}
        textSize={0}
        btnRadius={16}
        dialRadius={100}
        strokeWidth={16}
        dialWidth={16}
        meterColor={Colors.brand}
        meterWidth={12}
        gradientColorFrom={Colors.white}
        gradientColorTo={Colors.brand}
        strokeColor={Colors.neutral2}
        onValueChange={(value) => {
          const time = Math.floor(Number((value * 24) / 360));
          setValue(time);
          return value;
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.dark,
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font30,
            fontWeight: Fonts.Weight.bold,
          }}
        >
          {value}:00
        </Text>
      </View>
      {/* <CircularSlider
        value={value}
        onValueChange={setValue}
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

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function BottomSheetHeader({
  title,
  closeBottomSheet,
}: {
  title: string;
  closeBottomSheet: () => void;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingVertical: 16,
      }}
    >
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
      <TouchableOpacity
        onPress={closeBottomSheet}
        style={{
          width: 24,
          height: 24,
          borderRadius: 24 / 2,
          backgroundColor: Colors.neutral3,
          position: "absolute",
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/icons/close.png")} />
      </TouchableOpacity>
    </View>
  );
}

export default BottomSheetHeader;

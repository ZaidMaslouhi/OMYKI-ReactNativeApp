import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import CloseIcon from "../assets/icons/Close.svg";

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
        <CloseIcon stroke={Colors.neutral4} />
      </TouchableOpacity>
    </View>
  );
}

export default BottomSheetHeader;

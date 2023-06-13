import React from "react";
import { Text, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function HorizontalListItem({ title }: { title: string }) {
  return (
    <View
      style={{
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: Colors.neutral3,
        borderRadius: 16,
      }}
    >
      <Text
        style={{
          color: Colors.dark,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font14,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default HorizontalListItem;

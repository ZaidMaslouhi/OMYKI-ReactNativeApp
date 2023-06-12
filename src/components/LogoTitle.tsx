import React from "react";
import { Text, Image, View, ImageSourcePropType } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function LogoTitle({
  logo,
  title,
}: {
  logo: ImageSourcePropType;
  title: string;
}) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={{ borderRadius: 20, overflow: "hidden", marginBottom: 10 }}>
        <Image source={logo} style={{ height: 64, width: 64 }} />
      </View>
      <Text
        style={{
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font20,
          fontWeight: Fonts.Weight.full,
          color: Colors.dark,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default LogoTitle;

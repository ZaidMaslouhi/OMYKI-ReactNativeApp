import React from "react";
import { Image, Text, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function EditProfileImage() {
  return (
    <View style={{ gap: 16 }}>
      <View
        style={{
          height: 72,
          width: 72,
          backgroundColor: Colors.white,
          borderRadius: 72 / 2,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Image source={require("../assets/icons/single-user-add-plus.png")} />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: Colors.brand,
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font14,
            fontWeight: Fonts.Weight.semi,
          }}
        >
          Add photo
        </Text>
      </View>
    </View>
  );
}

export default EditProfileImage;

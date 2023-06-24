import React from "react";
import { Text, View, Image } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import UserAddPlusIcon from "../assets/icons/UserAddPlus.svg";

function EditProfileImage({ src }: { src: string }) {
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
        {src ? (
          <Image
            source={{ uri: src }}
            style={{ width: 72, height: 72, borderRadius: 72 / 2 }}
          />
        ) : (
          <UserAddPlusIcon stroke={Colors.dark} />
        )}
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

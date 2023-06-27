import React from "react";
import { Text, View, Image } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import UserAddPlusIcon from "../assets/icons/UserAddPlus.svg";
import ImagePickerButton from "./ImagePicker";

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

        <ImagePickerButton />
    </View>
  );
}

export default EditProfileImage;

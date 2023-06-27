import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

export default function ImagePickerButton() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState<
    boolean | null
  >(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log("galleryStatus",galleryStatus.status);
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (!hasGalleryPermission) return <Text>No access to internal storage!</Text>;

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Text
        onPress={() => pickImage()}
        style={{
          color: Colors.brand,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font14,
          fontWeight: Fonts.Weight.semi,
        }}
      >
        Add photo
      </Text>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Button title="Pick an image from camera roll" onPress={pickImage} />
    //   {image && (
    //     <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
    //   )}
    // </View>
  );
}

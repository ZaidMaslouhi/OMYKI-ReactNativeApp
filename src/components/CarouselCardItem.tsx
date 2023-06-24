import React from "react";
import { Image, Text, View } from "react-native";
import Colors from "../theme/colors";
import { ImageBackground } from "react-native";
import { Fonts } from "../theme/fonts";
import Key from "../interfaces/Key";
import StarIcon from "../assets/icons/Star.svg";
import HeartIcon from "../assets/icons/Heart.svg";

const CarouselCardItem = ({ item, width }: { item: Key; width: number }) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        borderRadius: 16,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 24,
          height: 24,
          borderRadius: 24 / 2,
          backgroundColor: Colors.warning,
          borderColor: Colors.brand,
          borderWidth: 2.2,
          position: "absolute",
          top: 5,
          left: -5,
          zIndex: 2,
        }}
      >
        <StarIcon fill={Colors.white} />
      </View>
      <ImageBackground
        source={item.imgUrl}
        resizeMode="cover"
        style={{
          position: "relative",
          width: width,
          height: 175,
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <View style={{ gap: 6, position: "absolute", padding: 16, zIndex: 1 }}>
          <Text
            style={{
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font12,
              color: Colors.white,
            }}
          >
            {item.device}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font18,
              fontWeight: Fonts.Weight.bold,
              color: Colors.white,
            }}
          >
            {item.title}
          </Text>
        </View>
        <View
          style={{
            width: 34,
            height: 34,
            borderRadius: 34 / 2,
            backgroundColor: Colors.white + "20",
            position: "absolute",
            bottom: 16,
            right: 16,
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeartIcon
            fill={item.favorite ? Colors.white : "transparent"}
            stroke={Colors.white}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.dark,
            opacity: 0.4,
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default CarouselCardItem;

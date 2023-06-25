import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Colors from "../theme/colors";
import Metrics from "../theme/metrics";
import Key from "../interfaces/Key";
import CarouselCardItem from "./CarouselCardItem";

export const ITEM_WIDTH = Math.round(Metrics.screenWidth * 0.75);

const KeysList: Key[] = [
  {
    device: "Aeneane leo",
    title: "Residence Mont Calm 1",
    favorite: true,
    imgUrl: require("../assets/images/ResidenceMontCalm1.jpg"),
  },
  {
    device: "Devices 3",
    title: "Residence Mont Calm 2",
    favorite: false,
    imgUrl: require("../assets/images/ResidenceMontCalm2.jpg"),
  },
  {
    device: "Lorem Ipsum",
    title: "Residence Mont Calm 3",
    imgUrl: require("../assets/images/ResidenceMontCalm3.jpg"),
  },
];

function KeysCarousel() {
  return (
    <View
      style={{
        backgroundColor: Colors.brand,
        paddingVertical: 10,
        gap: 16,
        borderBottomRightRadius: 60,
      }}
    >
      <FlatList
        data={KeysList}
        horizontal
        snapToInterval={ITEM_WIDTH + 16}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={{
                marginLeft: 24,
                marginRight: index === KeysList.length - 1 ? 24 : 0,
              }}
            >
              <CarouselCardItem item={item} width={ITEM_WIDTH} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default KeysCarousel;

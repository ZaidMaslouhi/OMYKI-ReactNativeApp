import React, { Component, useRef, useState } from "react";
import { FlatListProps, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Colors from "../theme/colors";
import Metrics from "../theme/metrics";
import Key from "../interfaces/Key";
import CarouselCardItem from "./CarouselCardItem";

export const ITEM_WIDTH = Math.round(Metrics.screenWidth * 0.75);

const Keys: Key[] = [
  {
    device: "Aenean leo",
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
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  return (
    <View
      style={{
        backgroundColor: Colors.brand,
        paddingVertical: 10,
        gap: 16,
        borderBottomRightRadius: 60,
      }}
    >
      <Carousel
        layout="default"
        ref={carouselRef}
        data={Keys}
        renderItem={({ item }) => (
          <CarouselCardItem item={item} width={ITEM_WIDTH} />
        )}
        sliderWidth={Metrics.screenWidth}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index: number) => setIndex(index)}
        useScrollView={true}
        loop={true}
      />

      <Pagination
        dotsLength={Keys.length}
        activeDotIndex={index}
        // carouselRef={carouselRef}
        // tappableDots={true}
        containerStyle={{ paddingVertical: 0 }}
        dotStyle={{
          width: 12,
          height: 8,
          borderRadius: 6,
          marginHorizontal: 0,
          backgroundColor: Colors.white,
        }}
        inactiveDotStyle={{
          width: 8,
          opacity: 0.1,
        }}
        inactiveDotScale={1}
        animatedDuration={300}
      />
    </View>
  );
}

export default KeysCarousel;

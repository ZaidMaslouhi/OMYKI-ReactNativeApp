import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Colors from "../theme/colors";
import Metrics from "../theme/metrics";
import CarouselCardItem from "./CarouselCardItem";
import Place from "../interfaces/Place";

export const ITEM_WIDTH = Math.round(Metrics.screenWidth * 0.75);

function KeysCarousel({
  places,
  activePlace,
}: {
  places: Place[];
  activePlace: (index: number) => void;
}) {
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
        data={places}
        horizontal
        snapToInterval={ITEM_WIDTH + 16}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              style={{
                marginLeft: 24,
                marginRight: index === places.length - 1 ? 24 : 0,
              }}
              onPress={() => {
                activePlace(index);
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

import React, { useState } from "react";
import { FlatList, TouchableHighlight, Text } from "react-native";
import Action from "../interfaces/Action";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function HorizontalList({
  items,
  onChange,
}: {
  items: Action[];
  onChange: (id: string) => void;
}) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <FlatList
      horizontal
      data={items}
      contentContainerStyle={{ gap: 8 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <TouchableHighlight
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderWidth: 2,
              borderColor:
                activeItem === index ? Colors.brand : Colors.neutral3,
              borderRadius: 16,
            }}
            onPress={() => {
              setActiveItem(index);
              onChange(item.id);
            }}
          >
            <Text
              style={{
                color: activeItem === index ? Colors.brand : Colors.dark,
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font14,
              }}
            >
              {item.name}
            </Text>
          </TouchableHighlight>
        );
      }}
    />
  );
}

export default HorizontalList;

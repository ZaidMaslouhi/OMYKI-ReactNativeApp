import React from "react";
import { FlatList } from "react-native";
import HorizontalListItem from "./HorizontalListItem";

function HorizontalList({ items }: { items: any[] }) {
  return (
    <FlatList
      horizontal
      data={items}
      contentContainerStyle={{ gap: 8 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => {
        return <HorizontalListItem key={index} title={item} />;
      }}
    />
  );
}

export default HorizontalList;

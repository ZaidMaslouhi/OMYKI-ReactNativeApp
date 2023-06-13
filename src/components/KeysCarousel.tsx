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
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/0bcd/9782/45ff8376546fa1550db7b7bc7e5d497a?Expires=1686528000&Signature=Y758DUxbDO6-m9SR3k9qn~SIVKpZktxMql8VnelzhUR4TMOW9nV-7n5HJkVBr2y7Qt-6Y3Jf~Y5yFmt7-DEWk189H4b~O6gE6o79iqM9M6YAdZlXwgyaRh1mcAROh7l8fQ8b69G592R2WNs50TyTBu9dF1yD3Y5dRaJTVLX~lbIVzGPwt5EjsZhkGv1LWc1A53FjBpFWjAaC7a6wjtgG4cE-4x6Y3cPSKsBRd-dtCaeL9CMbtFFEMnBsHDdQGGi6eZDQL4Ss8xwlFJTmlVEz6Mq~3Aui5fTc63JueNVVz-gW3e-OwzwP-zcovJ2xlRoBF3fk7Zrt0l9aHwk-hGju8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    device: "Devices 3",
    title: "Residence Mont Calm 1",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/deff/749e/40426b1a9a5adf37162f827fe65477f7?Expires=1686528000&Signature=dHvty6fZPwSNUXhRrP-AkexW009ZJ~gO9MbezbKcjCfJ6JEb0d27Y9bspFe683xXv~BuPnhEDGHA6PzBNnu3XjSZS16x-ZY~IgR6pV7JrUiyiaRhK4YI0Z1bAAIlKB4bQu7Qfr~U2wV6f9iB8Q8Veb5ecww~DwwpjaR6UMyk075oBuuWRihWRLrLHywSu7jK1pUJouwSIsoI0~RcQeBKy-XTZBueHFFCbbqKCOpiVYyjJY06w-Pgt5FGC5D8d1~LeR6gf~7X26-u~mcuvptD-CiDMEX7bShAv1yapiKrSxLGePvafoQjnEP0Mui3sPDm~gTxYFTcEz1xcFiNWL6kJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    device: "Lorem Ipsum",
    title: "Residence Mont Calm 1",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/324b/d07b/1aa14a3320db6e5f0700dcd9f21bb2ae?Expires=1686528000&Signature=fag1Dp27LQE5J~uwK1DXy-~K4Kb0wBIyrz8sGpV6El8tvi9NpgPvUEgWENMUTUzyTpPdc8shh6bz7RTuWOZ~u6dzhuZAeyfqsoQ4iptmpsoveCrN~jBLY78~2LDfvInuuLxjGjXCLU1l7cHcINDiHjpvvkyXtVmEvPoWd-1px1~RZStIe01vqIAXkzgb7~nVnZDLGRW1unedRxiWDn0~cN84Xx8TjfEEWA~4fqofl9QjaTgDgFJAMoyyl3ANdY6oBNtzmo4Eb~-E5S6atolrktkB0xtbDEkxYsUuNPd5o0gyBVVTBPmebJY45NcqCmFmbPenghddhpfvpwK7Qm6Raw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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

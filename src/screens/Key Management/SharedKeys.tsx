import React from "react";
import ActionBar from "../../components/ActionBar";
import { SectionList, Text, View } from "react-native";
import SharedKeysItem from "../../components/SharedKeysItem";
import { Fonts } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";

const Keys = [
  {
    title: "Appartment 1",
    data: [
      {
        key: "key 1",
        user: {
          fullName: "Bradley Lawlor",
          email: "c.a.glasser@outlook.com",
          image: require("../../assets/images/Profile.png"),
        },
      },
      {
        key: "key 2",
        user: {
          fullName: "Daniel Hamilton",
          email: "jerry73@aol.com",
          image: require("../../assets/images/Profile.png"),
        },
      },
    ],
  },
  {
    title: "Appartment 2",
    data: [
      {
        key: "key 4",
        user: {
          fullName: "David Elson",
          email: "k_pacheco@gmail.com",
          image: require("../../assets/images/Profile.png"),
        },
      },
    ],
  },
  {
    title: "Appartment 3",
    data: [
      {
        key: "key 5",
        user: {
          fullName: "James Hall",
          email: "james.hall@gmail.com",
          image: require("../../assets/images/Profile.png"),
        },
      },
    ],
  },
];

function SharedKeys() {
  const navigation = useNavigation();

  return (
    <>
      <ActionBar
        title="Back"
        withBack={true}
        onPress={() => navigation.goBack()}
      />

      <SectionList
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 8 }} />}
        sections={Keys}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font14,
              fontWeight: Fonts.Weight.semi,
            }}
          >
            {title}
          </Text>
        )}
        renderItem={({ item }) => (
          <SharedKeysItem accessKey={item.key} user={item.user} />
        )}
      />
    </>
  );
}

export default SharedKeys;

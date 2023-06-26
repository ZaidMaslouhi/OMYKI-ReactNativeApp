import React from "react";
import ActionBar from "../../components/ActionBar";
import { SectionList, Text, View } from "react-native";
import SharedKeysItem from "../../components/SharedKeysItem";
import { Fonts } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";
import { UserProfile } from "../../interfaces/User";

const Keys = [
  {
    title: "Appartment 1",
    data: [
      {
        key: "key 1",
        profile: {
          user: {
            firstName: "Bradley",
            lastName: "Lawlor",
            email: "c.a.glasser@outlook.com",
          },
          pictureProfile: require("../../assets/images/Profile.png"),
        } as UserProfile,
      },
      {
        key: "key 2",
        profile: {
          user: {
            firstName: "Daniel",
            lastName: "Hamilton",
            email: "jerry73@aol.com",
          },
          pictureProfile: require("../../assets/images/Profile.png"),
        } as UserProfile,
      },
    ],
  },
  {
    title: "Appartment 2",
    data: [
      {
        key: "key 4",
        profile: {
          user: {
            firstName: "David",
            lastName: "Elson",
            email: "k_pacheco@gmail.com",
          },
          pictureProfile: require("../../assets/images/Profile.png"),
        } as UserProfile,
      },
    ],
  },
  {
    title: "Appartment 3",
    data: [
      {
        key: "key 5",
        profile: {
          user: {
            firstName: "James",
            lastName: "Hall",
            email: "james.hall@gmail.com",
          },
          pictureProfile: require("../../assets/images/Profile.png"),
        } as UserProfile,
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
          <SharedKeysItem accessKey={item.key} profile={item.profile} />
        )}
      />
    </>
  );
}

export default SharedKeys;

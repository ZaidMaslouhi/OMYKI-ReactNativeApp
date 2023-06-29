import React from "react";
import ActionBar from "../../components/ActionBar";
import { SectionList, Text, View } from "react-native";
import SharedKeysItem from "../../components/SharedKeysItem";
import { Fonts } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";
import { UserProfile } from "../../interfaces/User";
import { useQuery } from "react-query";
import Place from "../../interfaces/Place";
import { GetAllPlacesByUser } from "../../services/place";
import Action from "../../interfaces/Action";

const Places = [
  {
    title: "Appartment 1",
    data: [
      {
        key: { id: "Foo", actionType: "DOOR", name: "Home" } as Action,
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
        key: { id: "Bar", actionType: "GATE", name: "Office" } as Action,
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
        key: { id: "Baz", actionType: "LIGHT", name: "Room" } as Action,
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
        key: { id: "Daf", actionType: "GARAGE", name: "Residence" } as Action,
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

// type SharedKey = { title: string; data: Action[] };

function SharedKeys() {
  const navigation = useNavigation();

  // const { isLoading, data: Places } = useQuery<unknown, string, SharedKey[] | []>(
  //   "places",
  //   GetAllPlacesByUser,
  //   {
  //     select: (data: any) =>
  //       data.map(
  //         (place: Place) =>
  //           ({ title: place.name, data: place.actions } as SharedKey)
  //       ),
  //   }
  // );

  return (
    <>
      <ActionBar
        title="Back"
        withBack={true}
        onPress={() => navigation.goBack()}
      />

      {Places && Places.length > 0 && (
        <SectionList
          contentContainerStyle={{ padding: 16 }}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 8 }} />}
          sections={Places}
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
            <SharedKeysItem actionKey={item.key} profile={item.profile} />
          )}
        />
      )}
    </>
  );
}

export default SharedKeys;

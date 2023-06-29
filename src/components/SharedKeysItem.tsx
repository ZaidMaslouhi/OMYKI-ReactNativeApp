import React from "react";
import { Image, Text, View, TouchableHighlight } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import TrashIcon from "../assets/icons/Trash.svg";
import { UserProfile } from "../interfaces/User";
import { useMutation } from "react-query";
import ReactQueryClient from "../config/reactQueryClient";
import { DeleteGrantedPlace } from "../services/place";
import Action from "../interfaces/Action";

function SharedKeysItem({
  actionKey,
  profile,
}: {
  actionKey: Action;
  profile: UserProfile;
}) {
  const deleteGrantedAccess = useMutation(DeleteGrantedPlace, {
    onSuccess: () => {
      ReactQueryClient.invalidateQueries("profile");
    },
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        borderColor: Colors.dark100,
        borderWidth: 1,
        borderRadius: 16,
        padding: 16,
      }}
    >
      <View style={{ gap: 16 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: profile.pictureProfile?.toString() }}
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
          />
          <View style={{ gap: 4 }}>
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font14,
                color: Colors.dark,
              }}
            >
              {profile.user.firstName + " " + profile.user.lastName}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font12,
                color: Colors.neutral,
              }}
            >
              {profile.user.email}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: Colors.dark,
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font12,
              backgroundColor: Colors.brand + "10",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 10,
            }}
          >
            Permanent access
          </Text>
        </View>
      </View>
      <TouchableHighlight
        style={{ justifyContent: "center" }}
        onPress={() => deleteGrantedAccess.mutate({ placeId: actionKey.id })}
      >
        <TrashIcon stroke={Colors.danger} />
      </TouchableHighlight>
    </View>
  );
}

export default SharedKeysItem;

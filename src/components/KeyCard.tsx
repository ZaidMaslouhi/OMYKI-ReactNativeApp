import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import DirectionIcon from "../assets/icons/Direction.svg";
import LockedIcon from "../assets/icons/Locked.svg";
import UnlockedIcon from "../assets/icons/Unlocked.svg";
import { useMutation } from "react-query";
import { TrigAction } from "../services/action";
import ReactQueryClient from "../config/reactQueryClient";
import Action from "../interfaces/Action";

function KeyCard({
  action,
  isLocked,
  isNearby,
}: {
  action: Action;
  isLocked: boolean;
  isNearby: boolean;
}) {
  const triggerAction = useMutation(TrigAction, {
    onSuccess: () => {
      ReactQueryClient.invalidateQueries("places");
    },
  });

  return (
    <View
      style={{
        width: "45%",
        padding: 16,
        margin: 8,
        gap: 8,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: Colors.dark100,
        backgroundColor: Colors.white,
      }}
    >
      <TouchableHighlight
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={() => triggerAction.mutate({ actionId: action.id })}
      >
        {isLocked ? <LockedIcon /> : <UnlockedIcon />}

        {isNearby && (
          <View style={{ flexDirection: "row", gap: 4, opacity: 0.5 }}>
            <DirectionIcon />
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font10,
                color: Colors.brand,
              }}
            >
              Nearby
            </Text>
          </View>
        )}
      </TouchableHighlight>
      <Text
        style={{
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font16,
          fontWeight: Fonts.Weight.semi,
          color: Colors.dark,
        }}
      >
        {action.name}
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font10,
          fontWeight: Fonts.Weight.semi,
          color: isLocked ? Colors.brand : Colors.success,
        }}
      >
        {isLocked ? "Locked" : "Unlocking"}
      </Text>
    </View>
  );
}

export default KeyCard;

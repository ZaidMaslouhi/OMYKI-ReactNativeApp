import React, { useState, useRef, useEffect } from "react";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import { Image, Text, View } from "react-native";
import Button from "./Button";
import { InvitationStatus, Notification } from "../interfaces/Notification";
import { useMutation } from "react-query";
import ReactQueryClient from "../config/reactQueryClient";
import {
  AcceptShareTemporarily,
  RefuseShareTemporarily,
} from "../services/share";
import InvitationMessage from "./InvitationMessage";
import { convertTimeToString } from "../utils/utils";

function NotificationItem({ item }: { item: Notification }) {
  const timeString = useRef("now");
  const [invitation, setInvitation] = useState<InvitationStatus | undefined>(
    item.invitationStatus
  );

  useEffect(() => {
    timeString.current = convertTimeToString({ time: item.time });
  }, []);

  const acceptShareInvitation = useMutation(AcceptShareTemporarily, {
    onSuccess: () => {
      setInvitation("Accepted");
      ReactQueryClient.invalidateQueries("places");
    },
  });

  const rejectShareInvitation = useMutation(RefuseShareTemporarily, {
    onSuccess: () => setInvitation("Rejected"),
  });

  return (
    <View style={{ gap: 16, padding: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            source={
              item.fromUser.pictureProfile ??
              require("../assets/images/Profile.png")
            }
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
              {item.fromUser.user.firstName + " " + item.fromUser.user.lastName}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font12,
                color: Colors.neutral,
              }}
            >
              {item.fromUser.user.email}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font12,
              color: Colors.dark,
            }}
          >
            {timeString.current}
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font12,
            color: Colors.dark,
          }}
        >
          {item.title}
        </Text>
      </View>

      {typeof invitation !== "undefined" ? (
        <InvitationMessage status={invitation} />
      ) : (
        <View
          style={{
            flexDirection: "row",
            gap: 16,
          }}
        >
          <View style={{ flex: 1 }}>
            <Button
              title="Accept"
              primary
              onPress={() =>
                acceptShareInvitation.mutate({ requestId: item.requestId })
              }
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="Decline"
              primary
              outline
              onPress={() =>
                rejectShareInvitation.mutate({ requestId: item.requestId })
              }
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default NotificationItem;

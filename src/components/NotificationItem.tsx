import React, { useState } from "react";
import Colors from "../theme/colors";
import User from "../interfaces/User";
import { Fonts } from "../theme/fonts";
import { Image, Text, View } from "react-native";
import AcceptedIcon from "../assets/icons/Accepted.svg";
import RejectedIcon from "../assets/icons/Rejected.svg";
import Button from "./Button";

function InvitationMessage({ status }: { status: "Accepted" | "Rejected" }) {
  return (
    <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
      {status === "Accepted" ? (
        <AcceptedIcon stroke={Colors.success} />
      ) : (
        <RejectedIcon stroke={Colors.danger} />
      )}
      <Text
        style={{
          color: status === "Accepted" ? Colors.success : Colors.danger,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font12,
        }}
      >
        Invitation {status === "Accepted" ? "Accepted" : "Rejected"}
      </Text>
    </View>
  );
}

function NotificationItem({
  item,
}: {
  item: {
    title: string;
    time: string;
    user: User;
    invitationStatus?: "Accepted" | "Rejected";
  };
}) {
  const [invitation, setInvitation] = useState<
    typeof item.invitationStatus | undefined
  >(item.invitationStatus);

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
            source={item.user.image}
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
              {item.user.firstName + " " + item.user.lastName}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font12,
                color: Colors.neutral,
              }}
            >
              {item.user.email}
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
            {item.time}
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
              onPress={() => setInvitation("Accepted")}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="Decline"
              primary
              outline
              onPress={() => setInvitation("Rejected")}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default NotificationItem;

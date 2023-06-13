import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import NotificationButtons from "./NotificationButtons";
import User from "../interfaces/User";

function InvitationMessage({ status }: { status: "Accepted" | "Rejected" }) {
  return (
    <>
      <Image
        source={
          status === "Accepted"
            ? require("../assets/icons/invitation-accepted.png")
            : require("../assets/icons/invitation-rejected.png")
        }
      />
      <Text
        style={{
          color: status === "Accepted" ? Colors.success : Colors.danger,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font12,
        }}
      >
        Invitation {status === "Accepted" ? "Accepted" : "Rejected"}
      </Text>
    </>
  );
}

function NotificationItem({
  title,
  time,
  user,
  invitationStatus,
}: {
  title: string;
  time: string;
  user: User;
  invitationStatus?: "Accepted" | "Rejected";
}) {
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
            source={user.image}
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
              {user.fullName}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font12,
                color: Colors.neutral,
              }}
            >
              {user.email}
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
            {time}
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
          {title}
        </Text>
      </View>

      {typeof invitationStatus !== "undefined" ? (
        <View style={{ flexDirection: "row", gap: 4 }}>
          <InvitationMessage status={invitationStatus} />
        </View>
      ) : (
        <NotificationButtons />
      )}
    </View>
  );
}

export default NotificationItem;

import React from "react";
import ActionBar from "../../components/ActionBar";
import { FlatList, View } from "react-native";
import Colors from "../../theme/colors";
import ModalInformation from "../../components/ModalInformation";
import NotificationItem from "../../components/NotificationItem";

const NotificationsList = [
  {
    title: "Alex wants to give you access to The Gardens by Délicis residence",
    time: "6:05 am",
    user: {
      fullName: "Alex Buckmaster",
      email: "s.t.sharkey@outlook.com",
      image: require("../../assets/icons/profile.png"),
    },
  },
  {
    title: "Mary wants to give you access to Beaumont Green",
    time: "6:05 am",
    invitationStatus: "Accepted" as const,
    user: {
      fullName: "Mary Freund",
      email: "dennis416@gmail.com",
      image: require("../../assets/icons/profile.png"),
    },
  },
  {
    title: "Alex wants to give you access to Les Mazets",
    time: "6:05 am",
    invitationStatus: "Rejected" as const,
    user: {
      fullName: "Stephanie Sharkey",
      email: "k_pacheco@gmail.com",
      image: require("../../assets/icons/profile.png"),
    },
  },
];

function Notifications() {
  return (
    <>
      <ActionBar title="Notifications" />

      {NotificationsList.length > 0 ? (
        <FlatList
          data={NotificationsList}
          contentContainerStyle={{ paddingBottom: 50 }}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: Colors.dark100 }} />
          )}
          renderItem={({ item, index }) => (
            <NotificationItem
              key={index}
              title={item.title}
              time={item.time}
              user={{ ...item.user }}
              invitationStatus={item.invitationStatus}
            />
          )}
        />
      ) : (
        <ModalInformation
          buttonText="Refresh"
          title="No notifications yet"
          icon={require("../../assets/icons/notifications.png")}
          description="As soon as the key is shared with you, you will see notifications here."
          onPressButton={() => () => {}}
        />
      )}
    </>
  );
}

export default Notifications;

import React from "react";
import ActionBar from "../../components/ActionBar";
import { FlatList, View } from "react-native";
import Colors from "../../theme/colors";
import ModalInformation from "../../components/ModalInformation";
import NotificationItem from "../../components/NotificationItem";
import User from "../../interfaces/User";

const NotificationsList = [
  {
    title: "Alex wants to give you access to The Gardens by Délicis residence",
    time: "6:05 am",
    user: {
      firstName: "Alex",
      lastName: "Buckmaster",
      email: "s.t.sharkey@outlook.com",
      image: require("../../assets/images/Profile.png"),
    } as User,
  },
  {
    title: "Mary wants to give you access to Beaumont Green",
    time: "6:05 am",
    invitationStatus: "Accepted" as const,
    user: {
      firstName: "Mary",
      lastName: "Freund",
      email: "dennis416@gmail.com",
      image: require("../../assets/images/Profile.png"),
    } as User,
  },
  {
    title: "Alex wants to give you access to Les Mazets",
    time: "6:05 am",
    invitationStatus: "Rejected" as const,
    user: {
      firstName: "Stephanie",
      lastName: "Sharkey",
      email: "k_pacheco@gmail.com",
      image: require("../../assets/images/Profile.png"),
    } as User,
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
              item={item}
            />
          )}
        />
      ) : (
        <ModalInformation
          buttonText="Refresh"
          title="No notifications yet"
          icon={require("../../assets/images/Bell.png")}
          description="As soon as the key is shared with you, you will see notifications here."
          onPressButton={() => () => {}}
        />
      )}
    </>
  );
}

export default Notifications;

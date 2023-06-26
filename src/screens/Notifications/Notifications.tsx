import React from "react";
import ActionBar from "../../components/ActionBar";
import { FlatList, View } from "react-native";
import Colors from "../../theme/colors";
import ModalInformation from "../../components/ModalInformation";
import NotificationItem from "../../components/NotificationItem";
import Notification from "../../interfaces/Notification";

const NotificationsList: Notification[] = [
  {
    id: "",
    title: "Alex wants to give you access to The Gardens by Délicis residence",
    time: new Date(Date.parse("26/06/2022 6:05 am")),
    fromUser: {
      user: {
        id: "",
        phoneNumber: "",
        indicativeNumber: "",
        firstName: "Alex",
        lastName: "Buckmaster",
        email: "s.t.sharkey@outlook.com",
      },
      pictureProfile: require("../../assets/images/Profile.png"),
    },
  },
  {
    id: "",
    title: "Mary wants to give you access to Beaumont Green",
    time: new Date(Date.parse("26/06/2022 6:05 am")),
    invitationStatus: "Accepted",
    fromUser: {
      user: {
        id: "",
        phoneNumber: "",
        indicativeNumber: "",
        firstName: "Mary",
        lastName: "Freund",
        email: "dennis416@gmail.com",
      },
      pictureProfile: require("../../assets/images/Profile.png"),
    },
  },
  {
    id: "",
    title: "Alex wants to give you access to Les Mazets",
    time: new Date(Date.parse("26/06/2022 6:05 am")),
    invitationStatus: "Rejected",
    fromUser: {
      user: {
        id: "",
        phoneNumber: "",
        indicativeNumber: "",
        firstName: "Stephanie",
        lastName: "Sharkey",
        email: "k_pacheco@gmail.com",
      },
      pictureProfile: require("../../assets/images/Profile.png"),
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
            <NotificationItem key={index} item={item} />
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

import React, { useEffect } from "react";
import { requestUserPermission } from "../config/notificationsMessaging";
import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";

function useNotificationMessaging() {
  useEffect(() => {
    console.log("requestUserPermission", requestUserPermission());

    //   // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        console.log("remoteMessage", remoteMessage);
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    //   // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    //   // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    //   // To listen to messages in the foreground
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log("A new FCM message arrived!", JSON.stringify(remoteMessage));
      Alert.alert("A new FCM message arrived", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
}

export default useNotificationMessaging;

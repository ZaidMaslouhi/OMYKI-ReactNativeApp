import React from "react";
import { View } from "react-native";
import Button from "./Button";

function NotificationButtons() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
      }}
    >
      <View style={{ flex: 1 }}>
        <Button title="Accept" primary onPress={() => () => {}} />
      </View>
      <View style={{ flex: 1 }}>
        <Button title="Decline" primary outline onPress={() => () => {}} />
      </View>
    </View>
  );
}


export default NotificationButtons;
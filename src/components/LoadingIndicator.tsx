import React from "react";
import { View, ActivityIndicator } from "react-native";
import Colors from "../theme/colors";

function LoadingIndicator() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color={Colors.brand} />
    </View>
  );
}

export default LoadingIndicator;

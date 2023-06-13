import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/Auth/SignUp";
import { INIT_ROUTE } from "../utils/constants";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName={INIT_ROUTE}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default Navigator;

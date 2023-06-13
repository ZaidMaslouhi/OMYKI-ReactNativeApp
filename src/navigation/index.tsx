import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/Auth/SignUp";
import { INIT_ROUTE } from "../utils/constants";
import SignIn from "../screens/Auth/SignIn";
import UserVerification from "../screens/Auth/UserVerification";
import PersonalInformation from "../screens/Auth/PersonalInformation";
import Congratulations from "../screens/Auth/Congratulations";
import KeyManagement from "../screens/Key Management/KeyManagement";
import GeneralSettings from "../screens/Key Management/GeneralSettings";
import SharedKeys from "../screens/Key Management/SharedKeys";
import MyDetails from "../screens/Settings/MyDetails";
import NotFound from "../screens/Error/NotFound";
import ConnectionFailed from "../screens/Error/ConnectionFailed";
import Settings from "../screens/Settings/Settings";
import HomeTabBar from "./HomeTabBar";
import useConnectionStatus from "../hooks/useConnectionStatus";
import RootStackParamList from "../interfaces/RootList";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  useConnectionStatus();

  return (
    <Stack.Navigator
      initialRouteName={INIT_ROUTE}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeTabBar} />

      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="UserVerification" component={UserVerification} />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
      />
      <Stack.Screen name="Congratulations" component={Congratulations} />
      <Stack.Screen name="KeyManagement" component={KeyManagement} />
      <Stack.Screen name="GeneralSettings" component={GeneralSettings} />
      <Stack.Screen name="SharedKeys" component={SharedKeys} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="MyDetails" component={MyDetails} />
      <Stack.Screen name="NotFound" component={NotFound} />
      <Stack.Screen name="ConnectionFailed" component={ConnectionFailed} />
    </Stack.Navigator>
  );
}

export default Navigator;

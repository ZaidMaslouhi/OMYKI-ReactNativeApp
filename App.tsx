import "expo-dev-client";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import useCustomFonts from "./src/hooks/useCustomFonts";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation";
import Colors from "./src/theme/colors";
import { useAuthentication } from "./src/hooks/useAuthentication";
import useNotificationMessaging from "./src/hooks/useNotificationMessaging";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  const fontsLoaded = useCustomFonts();
  useNotificationMessaging();
  const { user } = useAuthentication();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View
        style={styles.container}
        onLayout={() => {
          void onLayoutRootView();
        }}
      >
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral2,
  },
});

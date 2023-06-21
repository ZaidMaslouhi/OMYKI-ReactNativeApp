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

export default function App() {
  const fontsLoaded = useCustomFonts();
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral2,
  },
});

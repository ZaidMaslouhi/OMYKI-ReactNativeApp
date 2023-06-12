import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import useCustomFonts from "./src/hooks/useCustomFonts";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./src/theme/colors";

export default function App() {
  const fontsLoaded = useCustomFonts();

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
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral2,
  },
});

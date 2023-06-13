import "react-native-gesture-handler";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";
import useCustomFonts from "./src/hooks/useCustomFonts";
import Colors from "./src/theme/colors";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation";

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

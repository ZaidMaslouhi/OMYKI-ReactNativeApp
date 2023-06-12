import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

void SplashScreen.preventAutoHideAsync();

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    SourceSansPro: require("../assets/fonts/SourceSansPro-Regular.ttf"),
  });

  return fontsLoaded;
};

export default useCustomFonts;

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    SourceSansPro: require('../assets/fonts/SourceSansPro-Regular.ttf')
  })

  return fontsLoaded
}

export default useCustomFonts

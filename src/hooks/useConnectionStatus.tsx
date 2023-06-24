import { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { useNavigation } from "@react-navigation/native";
import { INIT_ROUTE } from "../utils/constants";

const useConnectionStatus = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((connectionInfo) => {
      if (!connectionInfo.isConnected) {
        navigation.navigate("ConnectionFailed");
      } else {
        // navigation.canGoBack()
        //   ? navigation.goBack()
        //   : navigation.navigate(INIT_ROUTE);
      }
    });
    return () => unsubscribe();
  }, []);
};

export default useConnectionStatus;

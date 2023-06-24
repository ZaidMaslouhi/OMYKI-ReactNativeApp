import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  GoogleAuthProvider,
  UserInfo,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/Button";
import LogoTitle from "../../components/LogoTitle";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import GoogleIcon from "../../assets/icons/Google.svg";
import AppleIcon from "../../assets/icons/Apple.svg";
import { GoogleSigninConfigure } from "../../config/googleAuth";

function SignIn() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest(
    GoogleSigninConfigure
  );

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      setUserInfo(userData);
    } catch (e) {
      console.log(e, "Error getting local user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem("@user", JSON.stringify(user));
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(() => {
    //TODO ADD VERIFICATION FROM API IF USER ALREADY HAVE A PHONE NUMBER
    if (userInfo && !userInfo.phoneNumber) {
      console.log(userInfo);
      navigation.navigate("PersonalInformation", { userInfo });
    }
  }, [navigation, userInfo]);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        gap: 16,
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <LogoTitle
        logo={require("../../assets/images/OmykiLogo.gif")}
        title="Sign In to Omyki"
      />

      <PhoneNumberInput />

      <Button
        title="Continue"
        primary
        onPress={() => navigation.navigate("UserVerification")}
      />

      <View style={{ gap: 16 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: Colors.dark,
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font16,
            }}
          >
            or
          </Text>
        </View>

        <Button
          title="Sign In with Google"
          icon={<GoogleIcon />}
          onPress={() => promptAsync()}
        />
        <Button
          title="Sign In with Apple"
          icon={<AppleIcon />}
          onPress={() => promptAsync()}
        />
      </View>
    </View>
  );
}

export default SignIn;

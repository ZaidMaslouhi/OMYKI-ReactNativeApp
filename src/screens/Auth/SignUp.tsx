import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import LogoTitle from "../../components/LogoTitle";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";
import GoogleIcon from "../../assets/icons/Google.svg";
import AppleIcon from "../../assets/icons/Apple.svg";

function SignUp() {
  const navigation = useNavigation();

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
        title={"Sign Up to Omyki"}
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
          title="Sign Up with Google"
          icon={<GoogleIcon />}
          onPress={() => navigation.navigate("UserVerification")}
        />

        <Button
          title="Sign Up with Apple"
          icon={<AppleIcon />}
          onPress={() => navigation.navigate("UserVerification")}
        />
      </View>
    </View>
  );
}

export default SignUp;

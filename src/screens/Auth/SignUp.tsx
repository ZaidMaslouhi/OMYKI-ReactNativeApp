import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import LogoTitle from "../../components/LogoTitle";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";

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
        logo={require("../../assets/icons/omyki-logo.gif")}
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
          icon={require("../../assets/icons/google-icon.png")}
          onPress={() => navigation.navigate("UserVerification")}
        />

        <Button
          title="Sign Up with Apple"
          icon={require("../../assets/icons/apple-icon.png")}
          onPress={() => navigation.navigate("UserVerification")}
        />
      </View>
    </View>
  );
}

export default SignUp;

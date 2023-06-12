import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import LogoTitle from "../../components/LogoTitle";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

function SignIn() {
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
        title={"Sign In to Omyki"}
      />

      <PhoneNumberInput />

      <Button title="Continue" primary onPress={() => () => {}} />

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
          icon={require("../../assets/icons/google-icon.png")}
          onPress={() => () => {}}
        />

        <Button
          title="Sign In with Apple"
          icon={require("../../assets/icons/apple-icon.png")}
          onPress={() => () => {}}
        />
      </View>
    </View>
  );
}

export default SignIn;
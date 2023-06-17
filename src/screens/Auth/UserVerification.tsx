import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Pressable,
  Keyboard,
} from "react-native";
import ActionBar from "../../components/ActionBar";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { RouteProp, useNavigation } from "@react-navigation/native";
import {
  codeVerification,
  sendPhoneNumberVerfication,
} from "../../services/phoneAuth";
import OTPInput from "../../components/OTPInput";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../config/firebase";
import { ApplicationVerifier } from "firebase/auth";

function UserVerification({
  route,
}: {
  route: RouteProp<{ params: { phoneNumber: string } }, "params">;
}) {
  const verificationId = useRef<string | undefined>();
  const navigation = useNavigation();
  const [timer, setTimer] = useState(20);
  const timerRef = useRef(timer);
  const recaptchaVerifier = useRef<FirebaseRecaptchaVerifierModal>(null);
  const [invalid, setInvalid] = useState(false);
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     timerRef.current -= 1;
  //     if (timerRef.current < 0) {
  //       clearInterval(timerId);
  //       const routes = navigation.getState()?.routes;
  //       const prevRoute = routes[routes.length - 2];
  //       if (prevRoute.name === "SignUp") {
  //         navigation.navigate("PersonalInformation");
  //       } else navigation.navigate("Home");
  //     } else {
  //       // if (timerRef.current < 10) setTimer("0" + timerRef.current);
  //       // else
  //       setTimer(timerRef.current);
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);

  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 6;

  const verifyPhoneNumber = async (
    phoneNumber: string,
    recapture: ApplicationVerifier
  ) => {
    verificationId.current = await sendPhoneNumberVerfication({
      phoneNumber,
      recaptureVerification: recapture,
    });
  };

  const verifyOTPCode = async ({
    verifId,
    otp,
  }: {
    verifId: string;
    otp: string;
  }) => {
    const isVerified = await codeVerification({
      verificationId: verifId,
      verificationCode: otp,
    });
    return isVerified;
  };

  useEffect(() => {
    if (isPinReady && verificationId.current) {
      verifyOTPCode({
        verifId: verificationId.current,
        otp: otpCode,
      })
        .then(() => {
          if (!invalid) navigation.navigate("PersonalInformation");
        })
        .catch(() => {
          setInvalid(true);
        });
    }
  }, [isPinReady]);

  useEffect(() => {
    if (recaptchaVerifier.current) {
      verifyPhoneNumber(route.params?.phoneNumber, recaptchaVerifier.current);
    }
  }, [route.params?.phoneNumber]);

  return (
    <>
      <ActionBar
        title="Back"
        withBack={true}
        onPress={() => navigation.goBack()}
      />

      <View
        style={{
          flex: 1,
          backgroundColor: Colors.neutral2,
          paddingHorizontal: 16,
          paddingVertical: 32,
          gap: 32,
        }}
      >
        <View style={{ gap: 16 }}>
          <Text
            style={{
              color: Colors.dark,
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font20,
              fontWeight: Fonts.Weight.bold,
            }}
          >
            Entry code
          </Text>
          <Text
            style={{
              color: Colors.neutral,
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font14,
            }}
          >
            We sent an SMS with a login code to the number{"\n"}
            +33 205 422 570
          </Text>
        </View>

        <View style={{ gap: 16, flexDirection: "row" }}>
          <Pressable
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={Keyboard.dismiss}
          >
            <OTPInput
              code={otpCode}
              setCode={setOTPCode}
              maximumLength={maximumCodeLength}
              setIsPinReady={setIsPinReady}
            />
          </Pressable>
        </View>

        {invalid ? (
          <View>
            <Text
              style={{
                color: Colors.neutral,
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font14,
              }}
            >
              Get the code again after 00:{timer < 10 ? "0" + timer : timer}
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: Colors.danger,
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font14,
              }}
            >
              You entered the wrong code.
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                timerRef.current = 20;
                setTimer(20);
              }}
            >
              <Text
                style={{
                  color: Colors.brand,
                  fontFamily: Fonts.Family.brand,
                  fontSize: Fonts.Size.font14,
                  textDecorationLine: "underline",
                }}
              >
                Send again.
              </Text>
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        // attemptInvisibleVerification={true}
      />
    </>
  );
}

export default UserVerification;

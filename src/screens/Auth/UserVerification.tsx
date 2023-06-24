import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import ActionBar from "../../components/ActionBar";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../config/firebase";

function UserVerification({
  route,
}: {
  route: RouteProp<
    { params: { verificationId: string; phoneNumber: string } },
    "params"
  >;
}) {
  const navigation = useNavigation();
  const { verificationId, phoneNumber } = route.params;
  const [timer, setTimer] = useState("10");
  const timerRef = useRef<number>(Number(timer));
  const [verificationCode, setVerificationCode] = useState("");
  const inputsRef = useRef<TextInput[]>([]);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        const routes = navigation.getState()?.routes;
        const prevRoute = routes[routes.length - 2];
        if (prevRoute.name === "SignUp") {
          navigation.navigate("PersonalInformation");
        }
      } else {
        if (timerRef.current < 10) setTimer("0" + timerRef.current);
        else setTimer(timerRef.current.toString());
      }
    }, 1000);

    setTimeout(() => {
      if (inputsRef.current[0]) {
        inputsRef.current[0].focus();
      }
    }, 100);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleVerification = async (code: string) => {
    console.log(code);

    if (code.length === 6) {
      try {
        const credential = PhoneAuthProvider.credential(verificationId, code);
        await signInWithCredential(auth, credential);
        console.log("Phone authentication successful 👍");
        navigation.navigate("Home");
      } catch (err) {
        setVerificationCode("");
        inputsRef.current.forEach((inputRef) => {
          inputRef.clear();
        });
        setInvalid(true); // Set invalid to true when verification fails
      }
    }
  };

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
            {phoneNumber}
          </Text>
        </View>

        <View style={{ gap: 16, flexDirection: "row" }}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <TextInput
              key={index}
              style={{
                fontFamily: Fonts.Family.brand,
                fontSize: Fonts.Size.font20,
                fontWeight: Fonts.Weight.bold,
              }}
              cursorColor={Colors.brand}
              keyboardType="numeric"
              placeholder="0"
              maxLength={1}
              onChangeText={(value) => {
                let code = verificationCode;
                if (value !== "") {
                  code =
                    code.substring(0, index - 1) +
                    value +
                    code.substring(index);
                } else {
                  code = code.substring(0, index - 1) + code.substring(index);
                }
                setVerificationCode(code);
                console.log(code);

                if (code.length === 6) {
                  handleVerification(code);
                } else if (code.length < 6) {
                  const nextIndex = index + 1;
                  const followingInput = inputsRef.current[nextIndex];
                  if (followingInput) {
                    followingInput.focus();
                  }
                }
              }}
              ref={(ref) => (inputsRef.current[index] = ref!)}
            />
          ))}
        </View>

        {invalid ? (
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
                timerRef.current = 10;
                setTimer("10");
                setInvalid(false);
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
        ) : (
          <View>
            {timerRef.current === 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: Colors.brand,
                    fontFamily: Fonts.Family.brand,
                    fontSize: Fonts.Size.font14,
                    textDecorationLine: "underline",
                  }}
                  onPress={() => {
                    timerRef.current = 10;
                    setTimer("10");
                  }}
                >
                  Send again.
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  color: Colors.neutral,
                  fontFamily: Fonts.Family.brand,
                  fontSize: Fonts.Size.font14,
                }}
              >
                Get the code again after 00:
                {Number(timer) < 10 ? "0" + timer : timer}
              </Text>
            )}
          </View>
        )}
      </View>
    </>
  );
}

export default UserVerification;

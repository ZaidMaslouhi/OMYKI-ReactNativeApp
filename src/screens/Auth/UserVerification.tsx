import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import ActionBar from "../../components/ActionBar";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

function UserVerification() {
  const [timer, setTimer] = useState(10);
  const timerRef = useRef(timer);
  // const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTimer(timerRef.current);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <ActionBar title="Back" withBack={true} onPress={() => () => {}} />

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
          <TextInput
            style={{
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font20,
              fontWeight: Fonts.Weight.bold,
            }}
            cursorColor={Colors.brand}
            keyboardType="numeric"
            placeholder="0"
            defaultValue="1"
          />
          <TextInput
            style={{
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font20,
              fontWeight: Fonts.Weight.bold,
            }}
            cursorColor={Colors.brand}
            keyboardType="numeric"
            placeholder="0"
          />
          <TextInput
            style={{
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font20,
              fontWeight: Fonts.Weight.bold,
            }}
            cursorColor={Colors.brand}
            keyboardType="numeric"
            placeholder="0"
          />
          <TextInput
            style={{
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font20,
              fontWeight: Fonts.Weight.bold,
            }}
            cursorColor={Colors.brand}
            keyboardType="numeric"
            placeholder="0"
          />
        </View>

        {/* {!invalid ? ( */}
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
        {/* ) : ( */}
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
              setTimer(10);
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
        {/* )} */}
      </View>
    </>
  );
}

export default UserVerification;

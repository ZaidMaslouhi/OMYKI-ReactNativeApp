import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Pressable,
  Text,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Fonts } from "../theme/fonts";
import Colors from "../theme/colors";

const OTPInput = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}: {
  code: string;
  setCode: (code: string) => void;
  maximumLength: number;
  setIsPinReady: (isReady: boolean) => void;
}) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef<TextInput>(null);

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const BoxDigit = ({ index }: { index: number }) => {
    const emptyInput = "0";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    // const StyledSplitBoxes =
    //   isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
    return (
      <View
        style={{
          borderColor: Colors.dark50,
          borderWidth: 1,
          borderRadius: 5,
          padding: 12,
          minWidth: 50,
        }}
        key={index}
      >
        <Text
          style={{
            textAlign: "center",
            color: code[index] ? Colors.dark : Colors.neutral,
            fontFamily: Fonts.Family.brand,
            fontSize: Fonts.Size.font20,
            fontWeight: Fonts.Weight.bold,
          }}
        >
          {digit}
        </Text>
      </View>
    );
  };

  //   {boxArray.length > 0 &&
  //     boxArray.map((_,index) => {
  //       return (<BoxDigit key={index} index>);
  //     })}

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Pressable
        style={{
          width: "80%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
        onPress={handleOnPress}
      >
        {boxArray.length > 0 &&
          boxArray.map((_, index) => <BoxDigit key={index} index={index} />)}
      </Pressable>
      <TextInput
        style={{ position: "absolute", opacity: 0 }}
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </View>
  );
};

export default OTPInput;

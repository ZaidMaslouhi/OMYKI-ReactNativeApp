import React, { ChangeEvent, SetStateAction, useState } from "react";
import { View, Text, TextInput } from "react-native";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";

const PhoneNumberInput = ({
  phoneNumber,
  errorMessage,
  handleChange,
}: {
  phoneNumber?: string;
  errorMessage?: string;
  handleChange?: (text: string) => void;
}) => {
  const [countryCode, setCountryCode] = useState<CountryCode>("FR");

  const selectCountry = (selectedCountry: Country) => {
    console.log(selectedCountry.cca2);
    setCountryCode(selectedCountry.cca2);
  };

  return (
    <View style={{ gap: 10 }}>
      <Text
        style={{
          color: Colors.dark,
          fontFamily: Fonts.Family.brand,
        }}
      >
        Phone number
      </Text>
      <View>
        <View
          style={{
            gap: 8,
            flexDirection: "row",
            alignItems: "center",
            height: 60,
            overflow: "hidden",
          }}
        >
          <CountryPicker
            onSelect={(value) => selectCountry(value)}
            containerButtonStyle={{
              borderWidth: 2,
              borderColor: Colors.dark100,
              borderRadius: 16,
              backgroundColor: Colors.white,
              paddingVertical: 12,
              paddingHorizontal: 14,
            }}
            withEmoji
            withFlag
            withFlagButton
            withCallingCode
            withCallingCodeButton
            withAlphaFilter
            countryCode={countryCode}
          />
          <View
            style={{
              flex: 1,
              borderWidth: 2,
              borderColor: Colors.dark100,
              borderRadius: 16,
              backgroundColor: Colors.white,
              paddingVertical: 16,
              paddingHorizontal: 14,
            }}
          >
            <TextInput
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={handleChange}
              placeholder="Enter your phone number"
              style={{ fontFamily: Fonts.Family.brand }}
              cursorColor={Colors.brand}
            />

            {/* <PhoneInput
            ref={phoneNumberInput}
            value={phoneNumber}
            autoFormat={false}
            renderFlag={() => {}}
            flagStyle={{ backgroundColor: '#ddd' }}
            pickerItemStyle={{ display: 'none' }}
            pickerBackgroundColor='#000'
            pickerButtonColor='#fff'
            onChangePhoneNumber={onPhoneInputChange}
            // onSelectCountry={selectCountry}
            style={{ margin: 0, padding: 0 }}
            textStyle={{
              fontFamily: Fonts.Family.brand,
              fontWeight: Fonts.Weight.semi,
              fontSize: Fonts.Size.font14
            }}
            textProps={{
              placeholder: 'Enter phone number',
              keyboardType: 'phone-pad',
              cursorColor: Colors.brand
            }}
          /> */}
          </View>
        </View>
        {errorMessage && (
          <Text style={{ color: Colors.danger, fontSize: Fonts.Size.font12 }}>
            {errorMessage}
          </Text>
        )}
      </View>
    </View>
  );
};

export default PhoneNumberInput;

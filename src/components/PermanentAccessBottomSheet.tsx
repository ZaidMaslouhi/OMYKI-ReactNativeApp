import React, { RefObject } from "react";
import FormInput from "./FormInput";
import PhoneNumberInput from "./PhoneNumberInput";
import Button from "./Button";
import BottomSheetComponent from "./BottomSheetComponent";
import { Text, TextInput, View } from "react-native";
import HorizontalList from "./HorizontalList";
import IconUserProfile from "../assets/icons/UserProfile.svg";
import IconEmail from "../assets/icons/Email.svg";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const Devices = [
  "Main entrance",
  "Garage",
  "Bat A barrier",
  "Main entrance",
  "Garage",
  "Bat A barrier",
];

function PermanentAccessBottomSheet({
  bottomSheetRef,
}: {
  bottomSheetRef: RefObject<BottomSheetModal>;
}) {
  return (
    <BottomSheetComponent
      title={"Permanent access"}
      bottomSheetRef={bottomSheetRef}
    >
      <>
        <View style={{ gap: 10 }}>
          <Text
            style={{
              color: Colors.dark,
              fontFamily: Fonts.Family.brand,
            }}
          >
            Device
          </Text>
          <HorizontalList items={Devices} />
        </View>

        <FormInput label={"First Name"} icon={<IconUserProfile />}>
          <TextInput
            placeholder="Enter your first name"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
          />
        </FormInput>

        <FormInput label={"Last Name"} icon={<IconUserProfile />}>
          <TextInput
            placeholder="Enter your last Name"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
          />
        </FormInput>

        <PhoneNumberInput />

        <FormInput label={"Email"} icon={<IconEmail />}>
          <TextInput
            placeholder="Enter your email"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
          />
        </FormInput>

        <View style={{ gap: 16 }}>
          <Button
            title="Import Сontact"
            primary
            outline
            icon={require("../assets/icons/import.png")}
            onPress={() => () => {}}
          />
          <Button title="Send Invited" primary onPress={() => () => {}} />
        </View>
      </>
    </BottomSheetComponent>
  );
}

export default PermanentAccessBottomSheet;

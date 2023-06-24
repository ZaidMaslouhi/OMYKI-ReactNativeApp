import React, { RefObject } from "react";
import FormInput from "./FormInput";
import PhoneNumberInput from "./PhoneNumberInput";
import Button from "./Button";
import BottomSheetComponent from "./BottomSheetComponent";
import { Share, Text, TextInput, View } from "react-native";
import HorizontalList from "./HorizontalList";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import EmailIcon from "../assets/icons/Email.svg";
import ImportIcon from "../assets/icons/Import.svg";
import UserProfileIcon from "../assets/icons/UserProfile.svg";

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

        <FormInput
          label={"First Name"}
          icon={<UserProfileIcon stroke={Colors.neutral} />}
        >
          <TextInput
            placeholder="Enter your first name"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
          />
        </FormInput>

        <FormInput
          label={"Last Name"}
          icon={<UserProfileIcon stroke={Colors.neutral} />}
        >
          <TextInput
            placeholder="Enter your last Name"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
          />
        </FormInput>

        <PhoneNumberInput />

        <FormInput label={"Email"} icon={<EmailIcon stroke={Colors.neutral} />}>
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
            icon={<ImportIcon stroke={Colors.brand} />}
            onPress={() => {}}
          />
          <Button
            title="Send Invited"
            primary
            onPress={async () => {
              const result = await Share.share(
                {
                  message: `Access Key Shared with You: \nhttps://www.google.com/`,
                },
                { dialogTitle: "OMYKI | Share Your Access Key" }
              );
              console.log("Shared Key: ", result);
            }}
          />
        </View>
      </>
    </BottomSheetComponent>
  );
}

export default PermanentAccessBottomSheet;

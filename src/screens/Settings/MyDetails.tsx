import React from "react";
import { ScrollView, TextInput } from "react-native";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import EditProfileImage from "../../components/EditProfileImage";
import IconUserProfile from "../../assets/icons/UserProfile.svg";
import IconEmail from "../../assets/icons/Email.svg";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

function MyDetails() {
  return (
    <>
      <ActionBar title="My details" withBack={true} onPress={() => () => {}} />

      <ScrollView contentContainerStyle={{ gap: 16, padding: 16 }}>
        <EditProfileImage />

        <FormInput label={"First Name"} icon={<IconUserProfile />}>
          <TextInput
            placeholder="Enter First Name"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
          />
        </FormInput>

        <FormInput label={"Last Name"} icon={<IconUserProfile />}>
          <TextInput
            placeholder="Enter Last Name"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
          />
        </FormInput>

        <PhoneNumberInput />

        <FormInput label={"Email"} icon={<IconEmail />}>
          <TextInput
            placeholder="Enter Email"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
          />
        </FormInput>

        <Button title="Save" primary onPress={() => () => {}} />
      </ScrollView>
    </>
  );
}

export default MyDetails;

import React, { RefObject, useEffect, useState } from "react";
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
import * as Contacts from "expo-contacts";
import { useMutation } from "react-query";
import ReactQueryClient from "../config/reactQueryClient";
import { RequestSharePermanently } from "../services/share";

const Devices = [
  "Main entrance",
  "Garage",
  "Bat A barrier",
  "Main entrance",
  "Garage",
  "Bat A barrier",
];

type Contact = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

function PermanentAccessBottomSheet({
  bottomSheetRef,
}: {
  bottomSheetRef: RefObject<BottomSheetModal>;
}) {
  let [error, setError] = useState<string | undefined>(undefined);
  let [contact, setContact] = useState<Contact | undefined>(undefined);

  const importContact = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });

      if (data.length > 0) {
        const contact = data[0];
        setContact({
          firstName: contact.firstName || "",
          lastName: contact.lastName || "",
          phoneNumber:
            (contact.phoneNumbers && contact.phoneNumbers[0].number) || "",
          email: (contact.emails && contact.emails[0].email) || "",
        });
      }
    }
  };

  const shareAccessPermanently = useMutation(RequestSharePermanently, {
    onSuccess: () => ReactQueryClient.invalidateQueries("places"),
  });

  const handlePermanentlyShareForm = () => {
    const values = {
      id: "123456",
      fromUserId: "Jhon",
      requestedPlaceId: "Home",
      actionsIds: ["Foo", "Bar", "Baz"],
      userRequested: {
        firstName: "jane",
        lastName: "doe",
        email: "jane.doe@gmail@gmail.com",
        phoneNumber: "06987456321",
        indicativeNumber: "+212",
      },
    };
    shareAccessPermanently.mutate(
      { ...values },
      {
        onSuccess: async () => {
          bottomSheetRef.current?.close();
        },
      }
    );
  };

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
            value={contact?.firstName ?? ""}
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
            value={contact?.lastName ?? ""}
          />
        </FormInput>

        <PhoneNumberInput phoneNumber={contact?.phoneNumber ?? ""} />

        <FormInput label={"Email"} icon={<EmailIcon stroke={Colors.neutral} />}>
          <TextInput
            placeholder="Enter your email"
            style={{ fontFamily: Fonts.Family.brand }}
            cursorColor={Colors.brand}
            value={contact?.email ?? ""}
          />
        </FormInput>

        <View style={{ gap: 16 }}>
          <Button
            title="Import Сontact"
            primary
            outline
            icon={<ImportIcon stroke={Colors.brand} />}
            onPress={() => importContact()}
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

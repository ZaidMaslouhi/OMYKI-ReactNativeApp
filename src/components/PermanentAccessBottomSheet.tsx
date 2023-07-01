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
import { useMutation, useQuery } from "react-query";
import ReactQueryClient from "../config/reactQueryClient";
import { RequestSharePermanently } from "../services/share";
import { GetAllPlacesByUser } from "../services/place";
import Action from "../interfaces/Action";
import Place from "../interfaces/Place";
import * as yup from "yup";
import { Formik } from "formik";
import { importContact } from "../utils/utils";
import { UserProfile } from "../interfaces/User";
import { GetUserProfile } from "../services/account";

const validationSchema = yup.object({
  devices: yup.array(yup.string()).required(),
  requestedId: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup.string().required(),
  indicativeNumber: yup.string().required(),
  email: yup.string().required().email(),
});

function PermanentAccessBottomSheet({
  bottomSheetRef,
}: {
  bottomSheetRef: RefObject<BottomSheetModal>;
}) {
  const [values, setValues] =
    useState<yup.InferType<typeof validationSchema>>();

  const importContactInfo = async () => {
    const contact = await importContact();
    if (contact) {
      setValues({
        devices: values?.devices || [],
        requestedId: values?.requestedId || "",
        firstName: contact?.firstName || "",
        lastName: contact?.lastName || "",
        email: contact?.email || "",
        phoneNumber: contact?.phoneNumber || "",
        indicativeNumber: contact?.indicativeNumber || "",
      });
    } else {
      console.log("No contact Found!");
    }
  };

  const { data: userProfile } = useQuery<unknown, string, UserProfile>(
    "profile",
    GetUserProfile
  );

  const { data: Devices } = useQuery<unknown, string, Action[]>(
    "places",
    GetAllPlacesByUser,
    {
      select: (data: any) => data.flatMap((place: Place) => place.actions),
    }
  );

  const shareAccessPermanently = useMutation(RequestSharePermanently, {
    onSuccess: () => ReactQueryClient.invalidateQueries("places"),
  });

  const handlePermanentlyShareForm = async (values: any) => {
    console.log(values);
    const validatedValues = await validationSchema.validate(values);
    if (validatedValues) {
      const shareAccess = {
        id: "",
        fromUserId: (userProfile as UserProfile).user.id,
        requestedPlaceId: validatedValues.requestedId,
        actionsIds: validatedValues.devices as string[],
        userRequested: {
          firstName: validatedValues.firstName,
          lastName: validatedValues.lastName,
          email: validatedValues.email,
          phoneNumber: validatedValues.phoneNumber,
          indicativeNumber: validatedValues.indicativeNumber,
        },
      };
      shareAccessPermanently.mutate(
        { ...shareAccess },
        {
          onSuccess: async () => {
            console.log("The Access Key Was Send!");
            bottomSheetRef.current?.close();
          },
        }
      );
    } else {
      console.error("Invalid form data!"); // Show validation errors
    }
  };

  return (
    <BottomSheetComponent
      title={"Permanent access"}
      bottomSheetRef={bottomSheetRef}
    >
      <Formik
        initialValues={{ ...values }}
        validationSchema={validationSchema}
        onSubmit={handlePermanentlyShareForm}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
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
              {Devices && (
                <HorizontalList
                  items={Devices}
                  onChange={handleChange("devices")}
                />
              )}
            </View>

            <FormInput
              label={"First Name"}
              icon={<UserProfileIcon stroke={Colors.neutral} />}
              errorMessage={errors.firstName?.toString()}
            >
              <TextInput
                placeholder="Enter your first name"
                style={{ fontFamily: Fonts.Family.brand }}
                cursorColor={Colors.brand}
                value={values?.firstName}
                onChangeText={handleChange("firstName")}
              />
            </FormInput>

            <FormInput
              label={"Last Name"}
              icon={<UserProfileIcon stroke={Colors.neutral} />}
              errorMessage={errors.lastName?.toString()}
            >
              <TextInput
                placeholder="Enter your last Name"
                style={{ fontFamily: Fonts.Family.brand }}
                cursorColor={Colors.brand}
                value={values?.lastName}
                onChangeText={handleChange("lastName")}
              />
            </FormInput>

            <PhoneNumberInput
              phoneNumber={{
                number: values?.phoneNumber ?? "",
                indicative: values?.indicativeNumber ?? "",
              }}
              handleChange={handleChange("phoneNumber")}
              errorMessage={errors.phoneNumber?.toString()}
            />

            <FormInput
              label={"Email"}
              icon={<EmailIcon stroke={Colors.neutral} />}
              errorMessage={errors.email?.toString()}
            >
              <TextInput
                placeholder="Enter your email"
                style={{ fontFamily: Fonts.Family.brand }}
                cursorColor={Colors.brand}
                value={values?.email}
                onChangeText={handleChange("email")}
              />
            </FormInput>

            <View style={{ gap: 16 }}>
              <Button
                title="Import Contact"
                primary
                outline
                icon={<ImportIcon stroke={Colors.brand} />}
                onPress={() => importContactInfo()}
              />
              <Button
                title="Send Invited"
                primary
                onPress={() => handleSubmit()}
              />
            </View>
          </>
        )}
      </Formik>
    </BottomSheetComponent>
  );
}

export default PermanentAccessBottomSheet;

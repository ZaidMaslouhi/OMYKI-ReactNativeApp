import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { Formik } from "formik";
import { GetUserProfile, UpdateUserProfile } from "../../services/account";
import { useMutation, useQuery } from "react-query";
import ReactQueryClient from "../../config/reactQueryClient";
import { UserProfile } from "../../interfaces/User";

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup.string().required(),
  indicativeNumber: yup.string().required(),
  email: yup.string().required().email(),
  pictureProfile: yup.string().notRequired(),
});

function MyDetails() {
  const navigation = useNavigation();
  const [values, setValues] =
    useState<yup.InferType<typeof validationSchema>>();

  const { data: userProfile } = useQuery<unknown, string, UserProfile>(
    "profile",
    GetUserProfile
  );

  const updateProfile = useMutation(UpdateUserProfile, {
    onSuccess: () => {
      ReactQueryClient.invalidateQueries("profile");
    },
  });

  const handleSubmitForm = async (values: any) => {
    console.log(values);
    const validatedValues = await validationSchema.validate(values);
    if (validatedValues) {
      updateProfile.mutate({
        profile: {
          ...userProfile,
          pictureProfile:
            validatedValues.pictureProfile ||
            (userProfile as UserProfile).pictureProfile,
          user: {
            ...(userProfile as UserProfile).user,
            firstName: validatedValues.firstName,
            lastName: validatedValues.lastName,
            phoneNumber: validatedValues.phoneNumber,
            email: validatedValues.email,
          },
        },
      });
    } else {
      console.error("Invalid form data!"); // Show validation errors
    }
  };

  return (
    <>
      <ActionBar
        title="My details"
        withBack={true}
        onPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{ gap: 16, padding: 16 }}>
        <Formik
          initialValues={{ ...values }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
        >
          {({ values, errors, handleSubmit, handleChange }) => (
            <>
              <EditProfileImage
                src={values.pictureProfile ?? ""}
                onChange={handleChange("pictureProfile")}
              />
              <FormInput
                label={"First Name"}
                icon={
                  <IconUserProfile stroke={Colors.dark} strokeWidth={1.5} />
                }
                errorMessage={errors.firstName?.toString()}
              >
                <TextInput
                  value={values?.firstName}
                  onChangeText={handleChange("firstName")}
                  placeholder="Enter First Name"
                  style={{ fontFamily: Fonts.Family.brand }}
                  cursorColor={Colors.brand}
                />
              </FormInput>

              <FormInput
                label={"Last Name"}
                icon={
                  <IconUserProfile stroke={Colors.dark} strokeWidth={1.5} />
                }
                errorMessage={errors.lastName?.toString()}
              >
                <>
                  <TextInput
                    value={values?.lastName}
                    onChangeText={handleChange("lastName")}
                    placeholder="Enter Last Name"
                    style={{ fontFamily: Fonts.Family.brand }}
                    cursorColor={Colors.brand}
                  />
                </>
              </FormInput>

              <PhoneNumberInput
                phoneNumber={{
                  number: values.phoneNumber ?? "",
                  indicative: values.indicativeNumber ?? "33",
                }}
                handleChangeNumber={handleChange("phoneNumber")}
                handleChangeCallingCode={handleChange("indicativeNumber")}
                errorMessage={
                  errors.phoneNumber?.toString() ||
                  errors.indicativeNumber?.toString()
                }
              />

              <FormInput
                label={"Email"}
                icon={<IconEmail stroke={Colors.dark} strokeWidth={1.5} />}
                errorMessage={errors.email?.toString()}
              >
                <TextInput
                  value={values?.email}
                  onChangeText={handleChange("email")}
                  placeholder="Enter Email"
                  style={{ fontFamily: Fonts.Family.brand }}
                  cursorColor={Colors.brand}
                />
              </FormInput>

              <Button title="Save" primary onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>
      </ScrollView>
    </>
  );
}

export default MyDetails;

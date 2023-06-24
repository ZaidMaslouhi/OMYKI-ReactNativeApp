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

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().required().email(),
});

function MyDetails() {
  const navigation = useNavigation();
  const [values, setValues] =
    useState<yup.InferType<typeof validationSchema>>();

  const handleSubmitForm = async (values: any) => {
    console.log("handleSubmit");
    console.log(values);
    // const isValid = false;
    const validatedValues = await validationSchema.validate(values);
    if (validatedValues) {
      navigation.navigate("Congratulations");
    } else {
      // Show validation errors
      console.error("Invalid form data!");
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
        <EditProfileImage src="" />

        <Formik
          initialValues={{ ...values }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
        >
          {({ values, errors, handleSubmit, handleChange }) => (
            <>
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
                phoneNumber={values?.phoneNumber}
                handleChange={handleChange("phoneNumber")}
                errorMessage={errors.phoneNumber?.toString()}
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

import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import EditProfileImage from "../../components/EditProfileImage";
import IconUserProfile from "../../assets/icons/UserProfile.svg";
import IconEmail from "../../assets/icons/Email.svg";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { Formik } from "formik";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import { app, auth } from "../../config/firebase";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { PhoneAuthProvider, UserInfo } from "firebase/auth";

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  phoneNumber: yup.string().required(),
  photoURL: yup.string(),
});

function PersonalInformation({
  route,
}: {
  route: { params: { userInfo: UserInfo } };
}) {
  const navigation = useNavigation();
  const { userInfo } = route.params;
  const firebaseConfig = app ? app.options : undefined;
  const recaptchaVerifier = React.useRef(null);

  const [values, setValues] = useState<yup.InferType<typeof validationSchema>>({
    firstName: userInfo.displayName?.split(" ")[0] || "",
    lastName: userInfo.displayName?.split(" ")[1] || "",
    email: userInfo.email || "",
    photoURL: userInfo.photoURL || "",
    phoneNumber: "",
  });

  const handleSubmitForm = async (
    values: yup.InferType<typeof validationSchema>
  ) => {
    const validatedValues = await validationSchema.validate(values);
    if (validatedValues) {
      navigation.navigate("Congratulations");
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        //phoneNumber,
        // "+212674885451",
        validatedValues.phoneNumber,
        recaptchaVerifier.current!
      );
      console.log("Verification code has been sent to your phone.");
      navigation.navigate("UserVerification", {
        verificationId,
        phoneNumber: validatedValues.phoneNumber,
      });
    } else {
      console.error("Invalid form data!");
    }
  };

  return (
    <>
      <ActionBar title="Personal information" />

      <ScrollView
        contentContainerStyle={{ gap: 16, padding: 16 }}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{ ...values }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
        >
          {({ values, errors, handleSubmit, handleChange }) => (
            <>
              <EditProfileImage src={values?.photoURL || ""} />
              <FormInput
                label={"First Name"}
                icon={<IconUserProfile stroke={Colors.dark} />}
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
                icon={<IconUserProfile stroke={Colors.dark} />}
                errorMessage={errors.lastName?.toString()}
              >
                <TextInput
                  value={values?.lastName}
                  onChangeText={handleChange("lastName")}
                  placeholder="Enter Last Name"
                  style={{ fontFamily: Fonts.Family.brand }}
                  cursorColor={Colors.brand}
                />
              </FormInput>

              <FormInput
                label={"Email"}
                icon={<IconEmail stroke={Colors.dark} />}
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

              <PhoneNumberInput
                phoneNumber={values?.phoneNumber}
                handleChange={handleChange("phoneNumber")}
                errorMessage={errors.phoneNumber?.toString()}
              />

              <Button title="Continue" primary onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>
      </ScrollView>

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={true}
      />
    </>
  );
}

export default PersonalInformation;

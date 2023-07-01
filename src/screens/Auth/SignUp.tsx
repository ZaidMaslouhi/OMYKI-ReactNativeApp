import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import LogoTitle from "../../components/LogoTitle";
import Colors from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";
import GoogleIcon from "../../assets/icons/Google.svg";
import AppleIcon from "../../assets/icons/Apple.svg";
import * as yup from "yup";
import { Formik } from "formik";

const validationSchema = yup.object({
  phoneNumber: yup.string().required(),
  indicativeNumber: yup.string().required(),
});

function SignUp() {
  const navigation = useNavigation();
  const [values, setValues] = useState<yup.InferType<typeof validationSchema>>({
    phoneNumber: "",
    indicativeNumber: "33",
  });

  const handleSubmitForm = async (values: any) => {
    const validatedValues = await validationSchema.validate(values);
    if (validatedValues) {
      console.log(validatedValues);
      // navigation.navigate("UserVerification");
    } else {
      console.error("Invalid form data!"); // Show validation errors
    }
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 16,
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <LogoTitle
        logo={require("../../assets/images/OmykiLogo.gif")}
        title={"Sign Up to Omyki"}
      />

      <Formik
        initialValues={{ ...values }}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <>
            <PhoneNumberInput
              phoneNumber={{
                number: values.phoneNumber,
                indicative: values.indicativeNumber,
              }}
              handleChangeNumber={handleChange("phoneNumber")}
              handleChangeCallingCode={handleChange("indicativeNumber")}
              errorMessage={
                errors.phoneNumber?.toString() ||
                errors.indicativeNumber?.toString()
              }
            />
            <Button title="Continue" primary onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>

      <View style={{ gap: 16 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: Colors.dark,
              fontFamily: Fonts.Family.brand,
              fontSize: Fonts.Size.font16,
            }}
          >
            or
          </Text>
        </View>

        <Button
          title="Sign Up with Google"
          icon={<GoogleIcon />}
          onPress={() => navigation.navigate("UserVerification")}
        />

        <Button
          title="Sign Up with Apple"
          icon={<AppleIcon />}
          onPress={() => navigation.navigate("UserVerification")}
        />
      </View>
    </View>
  );
}

export default SignUp;

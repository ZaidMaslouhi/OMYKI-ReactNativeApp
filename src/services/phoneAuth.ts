import { ApplicationVerifier } from "firebase/auth";
import firebase from "firebase/compat/app";

const sendPhoneNumberVerfication = async ({
  phoneNumber,
  recaptureVerification,
}: {
  phoneNumber: string;
  recaptureVerification: ApplicationVerifier;
}) => {
  try {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      recaptureVerification
    );

    return verificationId;
  } catch (error) {
    console.log(error);
  }
};

const codeVerification = async ({
  verificationId,
  verificationCode,
}: {
  verificationId: string;
  verificationCode: string;
}) => {
  try {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );

    const userCredential = await firebase
      .auth()
      .signInWithCredential(credential);

    console.log("userCredential", userCredential.user);

    return userCredential.user;
  } catch (error) {
    console.log(error);
  }
};

export { sendPhoneNumberVerfication, codeVerification };

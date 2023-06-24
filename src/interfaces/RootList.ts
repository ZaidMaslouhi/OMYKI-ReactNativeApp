import { UserInfo } from "firebase/auth";

type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  SignIn: undefined;
  UserVerification: { verificationId: string; phoneNumber: string } | undefined;
  PersonalInformation: { userInfo: UserInfo | null };
  Congratulations: undefined;
  KeyManagement: undefined;
  GeneralSettings: undefined;
  SharedKeys: undefined;
  Settings: undefined;
  MyDetails: undefined;
  NotFound: undefined;
  ConnectionFailed: undefined;
};

export default RootStackParamList;

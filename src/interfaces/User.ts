import { ImageSourcePropType } from "react-native";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  indicativeNumber: string;
  image: ImageSourcePropType;
}

export default User;

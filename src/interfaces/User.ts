import { ImageSourcePropType } from "react-native";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  indicativeNumber: string;
}

interface UserProfile {
  user: User;
  pictureProfile?: string;
  rankPlaces?: string[];
}

interface UserRequested {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  indicativeNumber: string;
}

export { User, UserProfile, UserRequested };

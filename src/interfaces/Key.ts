import { ImageSourcePropType } from "react-native";

interface Key {
  device: string;
  title: string;
  imgUrl: ImageSourcePropType;
  favorite?: boolean;
}

export default Key;

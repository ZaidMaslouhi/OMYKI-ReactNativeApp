import RootStackParamList from "../src/interfaces/RootList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

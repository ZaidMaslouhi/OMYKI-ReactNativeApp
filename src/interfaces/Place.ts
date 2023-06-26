import Action from "./Action";

type RightAccessType = "OWNER" | "GUEST";

type PlaceType =
  | "COMPANY"
  | "CO_OWNERSHIP"
  | "INDIVIDUAL"
  | "BUILDING"
  | "APARTMENT";

interface Address {
  addressLines: string;
  locality: string;
  region: string;
  zipCode: number;
  country: string;
}

interface Place {
  id: string;
  name: string;
  placeType: PlaceType;
  rootPlaceName: string;
  rightAccessType: RightAccessType;
  placePictureUrl: string;
  subPlaceName: string;
  address: Address;
  actions: Action[];
}

export default Place;

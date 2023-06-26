type ActionType = "DOOR" | "GATE" | "LIGHT" | "GARAGE";

interface Action {
  id: string;
  actionType: ActionType;
  name: string;
  latitude: string;
  longitude: string;
}

export default Action;

import { Text, View } from "react-native";
import AcceptedIcon from "../assets/icons/Accepted.svg";
import RejectedIcon from "../assets/icons/Rejected.svg";
import { InvitationStatus } from "../interfaces/Notification";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";

function InvitationMessage({ status }: { status: InvitationStatus }) {
  return (
    <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
      {status === "Accepted" ? (
        <AcceptedIcon stroke={Colors.success} />
      ) : (
        <RejectedIcon stroke={Colors.danger} />
      )}
      <Text
        style={{
          color: status === "Accepted" ? Colors.success : Colors.danger,
          fontFamily: Fonts.Family.brand,
          fontSize: Fonts.Size.font12,
        }}
      >
        Invitation {status === "Accepted" ? "Accepted" : "Rejected"}
      </Text>
    </View>
  );
}

export default InvitationMessage;

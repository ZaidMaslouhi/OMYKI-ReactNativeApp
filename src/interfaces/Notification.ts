import { UserProfile } from "./User";

interface Notification {
  id: string;
  title: string;
  time: Date;
  invitationStatus?: "Accepted" | "Rejected";
  fromUser: UserProfile;
}

export default Notification;

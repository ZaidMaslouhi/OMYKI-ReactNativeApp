import { UserProfile } from "./User";

type InvitationStatus = "Accepted" | "Rejected";

interface Notification {
  id: string;
  requestId: string,
  title: string;
  time: Date;
  invitationStatus?: InvitationStatus;
  fromUser: UserProfile;
}

export { Notification, InvitationStatus };

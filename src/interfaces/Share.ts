import { UserProfile } from "./User";

interface Share {
  id: string;
  fromUserId: string;
  requestedPlaceId: string;
  actionsIds: string[];
}

interface ShareTemporarily extends Share {
  start: Date;
  end: Date;
}

interface SharePermanently extends Share {
  userRequested: UserProfile;
}

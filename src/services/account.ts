import axios from "axios";
import { UserProfile } from "../interfaces/User";
import AxiosClient from "../config/axios";

const UpdateUserProfile = async ({
  profile,
  rankPlaces,
}: {
  profile: UserProfile;
  rankPlaces: string[];
}) => {
  const response = await AxiosClient.put(
    "/configuration/user/profile",
    JSON.stringify({
      pictureProfile: profile.pictureProfile.toString(),
      userDto: {
        id: profile.user.id,
        firstName: profile.user.firstName,
        lastName: profile.user.lastName,
        phoneNumber: profile.user.phoneNumber,
        indicativeNumber: profile.user.indicativeNumber,
        email: profile.user.email,
      },
      rankPlaces,
    })
  );

  return response;
};

const DisableAccount = async () => {
  const response = await AxiosClient.post("/configuration/account");

  return response;
};

const GetUserProfile = async () => {
  const response = await axios.get("/configuration/user/profile");

  return response;
};

export { UpdateUserProfile, DisableAccount, GetUserProfile };

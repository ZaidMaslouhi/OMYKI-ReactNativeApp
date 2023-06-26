import axios from "axios";
import { API_BASE } from "@env";
import { UserProfile } from "../interfaces/User";

const UpdateUserProfile = async ({
  profile,
  rankPlaces,
}: {
  profile: UserProfile;
  rankPlaces: string[];
}) => {
  try {
    const response = await axios.put(
      `${API_BASE}/configuration/user/profile/`,
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
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { message: "User profile updated successfully!" } };
    }

    throw new Error("Failed to update user profile!");
  } catch (error) {
    throw new Error("Failed to update user profile!");
  }
};

const DisableAccount = async () => {
  try {
    const response = await axios.post(
      `${API_BASE}/configuration/account`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { message: "User account disabled!" } };
    }

    throw new Error("Failed to disable user account!");
  } catch (error) {
    throw new Error("Failed to disable user account!");
  }
};

const GetUserProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE}/configuration/user/profile`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      return {
        success: { data: response.data },
      };
    }

    throw new Error("Failed to get user profile!");
  } catch (error) {
    throw new Error("Failed to get user profile!");
  }
};

export { UpdateUserProfile, DisableAccount, GetUserProfile };

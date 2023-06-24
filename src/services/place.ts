import axios from "axios";
import { API_BASE } from "@env";

const GetAllPlacesByUser = async () => {
  try {
    const response = await axios.get(`${API_BASE}/places/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      return { success: { data: response.data } };
    }

    throw new Error("Failed to get places!");
  } catch (error) {
    throw new Error("Failed to get places!");
  }
};

const DeleteSharePlace = async ({ placeId }: { placeId: string }) => {
  try {
    const response = await axios.delete(`${API_BASE}/places/share/${placeId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      return { success: { message: "Place share deleted!" } };
    }

    throw new Error("Failed to delete place share!");
  } catch (error) {
    throw new Error("Failed to delete place share!");
  }
};

const DeleteGrantedPlace = async ({ placeId }: { placeId: string }) => {
  try {
    const response = await axios.delete(`${API_BASE}/places/grant/${placeId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      return { success: { message: "Place grant deleted!" } };
    }

    throw new Error("Failed to delete place grant!");
  } catch (error) {
    throw new Error("Failed to delete place grant!");
  }
};

const GetPlaceByAnonymous = async ({
  anonymousToken,
}: {
  anonymousToken: string;
}) => {
  try {
    const response = await axios.get(
      `${API_BASE}/anonymous/${anonymousToken}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { data: response.data } };
    }

    throw new Error("Failed to get any place!");
  } catch (error) {
    throw new Error("Failed to get any place!");
  }
};

export {
  GetAllPlacesByUser,
  DeleteSharePlace,
  DeleteGrantedPlace,
  GetPlaceByAnonymous,
};

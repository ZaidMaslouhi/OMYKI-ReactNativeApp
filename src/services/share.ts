import axios from "axios";
import { API_BASE } from "@env";
import User from "../interfaces/User";

const ShareTemporarily = async ({
  id,
  fromUserId,
  requestedPlaceId,
  actionsIds,
  start,
  end,
}: {
  id: string;
  fromUserId: string;
  requestedPlaceId: string;
  actionsIds: string[];
  start: Date;
  end: Date;
}) => {
  try {
    const response = await axios.put(
      `${API_BASE}/share/temporarily`,
      JSON.stringify({
        id,
        fromUserId,
        requestedPlaceId,
        actionsIds,
        start: start.toString(),
        end: end.toString(),
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { data: response.data } };
    }

    throw new Error("Failed to share the place!");
  } catch (error) {
    throw new Error("Failed to share the place!");
  }
};

const RequestSharePermanently = async ({
  id,
  fromUserId,
  requestedPlaceId,
  actionsIds,
  userRequested,
}: {
  id: string;
  fromUserId: string;
  requestedPlaceId: string;
  actionsIds: string[];
  userRequested: User;
}) => {
  try {
    const response = await axios.put(
      `${API_BASE}/share/permanently/request`,
      JSON.stringify({
        id,
        fromUserId,
        requestedPlaceId,
        actionsIds,
        userRequested: {
          indicativeNumber: userRequested.indicativeNumber,
          phoneNumber: userRequested.phoneNumber,
          mail: userRequested.email,
          firstName: userRequested.firstName,
          lastName: userRequested.lastName,
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { message: "Request share sent!" } };
    }

    throw new Error("Failed to share the place!");
  } catch (error) {
    throw new Error("Failed to share the place!");
  }
};

const RefuseShareTemporarily = async ({ requestId }: { requestId: string }) => {
  try {
    const response = await axios.put(
      `${API_BASE}/share/permanently/refuse`,
      requestId,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { message: "Place share refused!" } };
    }

    throw new Error("Failed to refuse the place sharing!");
  } catch (error) {
    throw new Error("Failed to refuse the place sharing!");
  }
};

const AcceptShareTemporarily = async ({ requestId }: { requestId: string }) => {
  try {
    const response = await axios.put(
      `${API_BASE}/share/permanently/accept`,
      requestId,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { message: "Place share accepted!" } };
    }

    throw new Error("Failed to accept sharing the place!");
  } catch (error) {
    throw new Error("Failed to accept sharing the place!");
  }
};

export {
  ShareTemporarily,
  RequestSharePermanently,
  RefuseShareTemporarily,
  AcceptShareTemporarily,
};

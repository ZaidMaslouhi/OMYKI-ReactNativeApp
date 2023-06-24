import axios from "axios";
import { API_BASE } from "@env";

const TrigAction = async ({ actionId }: { actionId: string }) => {
  try {
    const response = await axios.get(
      `${API_BASE}/actions/${actionId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { message: "Action triggered!" } };
    }
    throw new Error("Failed to trigger the action!");
  } catch (error) {
    throw new Error("Failed to trigger the action!");
  }
};

const TrigActionByAnonymous = async ({
  anonymousToken,
  actionId,
}: {
  anonymousToken: string;
  actionId: string;
}) => {
  try {
    const response = await axios.get(
      `${API_BASE}/anonymous/${anonymousToken}/action/${actionId}/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 200) {
      return { success: { message: "Action triggered!" } };
    }
    throw new Error("Failed to trigger the action!");
  } catch (error) {
    throw new Error("Failed to trigger the action!");
  }
};

export { TrigAction, TrigActionByAnonymous };

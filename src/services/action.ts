import AxiosClient from "../config/axios";

const TrigAction = async ({ actionId }: { actionId: string }) => {
  const response = await AxiosClient.get(`/actions/${actionId}`);

  return response;
};

const TrigActionByAnonymous = async ({
  anonymousToken,
  actionId,
}: {
  anonymousToken: string;
  actionId: string;
}) => {
  const response = await AxiosClient.get(
    `/anonymous/${anonymousToken}/action/${actionId}/`
  );

  return response;
};

export { TrigAction, TrigActionByAnonymous };

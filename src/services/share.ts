import { UserRequested } from "../interfaces/User";
import AxiosClient from "../config/axios";

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
  const response = await AxiosClient.put(
    "/share/temporarily",
    JSON.stringify({
      id,
      fromUserId,
      requestedPlaceId,
      actionsIds,
      start: start.toString(),
      end: end.toString(),
    })
  );

  return response;
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
  userRequested: UserRequested;
}) => {
  const response = await AxiosClient.put(
    "/share/permanently/request",
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
    })
  );

  return response;
};

const RefuseShareTemporarily = async ({ requestId }: { requestId: string }) => {
  const response = await AxiosClient.put(
    "/share/permanently/refuse",
    requestId
  );

  return response;
};

const AcceptShareTemporarily = async ({ requestId }: { requestId: string }) => {
  const response = await AxiosClient.put(
    "/share/permanently/accept",
    requestId
  );

  return response;
};

export {
  ShareTemporarily,
  RequestSharePermanently,
  RefuseShareTemporarily,
  AcceptShareTemporarily,
};

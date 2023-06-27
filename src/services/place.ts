import AxiosClient from "../config/axios";

const GetAllPlacesByUser = async () => {
  const response = await AxiosClient.get("/places");

  return response;
};

const DeleteSharePlace = async ({ placeId }: { placeId: string }) => {
  const response = await AxiosClient.delete(`/places/share/${placeId}`);

  return response;
};

const DeleteGrantedPlace = async ({ placeId }: { placeId: string }) => {
  const response = await AxiosClient.delete(`/places/grant/${placeId}`);

  return response;
};

const GetPlaceByAnonymous = async ({
  anonymousToken,
}: {
  anonymousToken: string;
}) => {
  const response = await AxiosClient.get(`/anonymous/${anonymousToken}`);

  return response;
};

export {
  GetAllPlacesByUser,
  DeleteSharePlace,
  DeleteGrantedPlace,
  GetPlaceByAnonymous,
};

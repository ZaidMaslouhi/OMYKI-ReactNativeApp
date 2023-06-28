import AxiosClient from "../config/axios";

const GetAllPlacesByUser = async () => {
  // const response = await AxiosClient.get("/places");
  // return response;

  return new Promise((resolve) =>
    resolve([
      {
        id: "Place 1",
        placeType: "APARTMENT",
        rightAccessType: "OWNER",
        rootPlaceName: "",
        subPlaceName: "",
        name: "Residence Mont Calm 1",
        placePictureUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        address: {
          addressLines: "",
          locality: "",
          region: "",
          zipCode: 90000,
          country: "",
        },
        actions: [
          {
            id: "",
            name: "Main Entrance",
            actionType: "DOOR",
            longitude: "0",
            latitude: "0",
          },
          {
            id: "",
            name: "Hallway",
            actionType: "GARAGE",
            longitude: "0",
            latitude: "0",
          },
          {
            id: "",
            name: "Main Office",
            actionType: "GATE",
            longitude: "0",
            latitude: "0",
          },
        ],
      },
      {
        id: "Place 2",
        placeType: "BUILDING",
        rightAccessType: "OWNER",
        rootPlaceName: "",
        subPlaceName: "",
        name: "Residence Mont Calm 2",
        placePictureUrl:
          "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        address: {
          addressLines: "",
          locality: "",
          region: "",
          zipCode: 90000,
          country: "",
        },
        actions: [
          {
            id: "",
            name: "Hallway",
            actionType: "GARAGE",
            longitude: "0",
            latitude: "0",
          },
          {
            id: "",
            name: "Main Entrance",
            actionType: "DOOR",
            longitude: "0",
            latitude: "0",
          },
          {
            id: "",
            name: "Main Office",
            actionType: "GATE",
            longitude: "0",
            latitude: "0",
          },
          {
            id: "",
            name: "Main Entrance 2",
            actionType: "DOOR",
            longitude: "0",
            latitude: "0",
          },
        ],
      },
      {
        id: "Place 3",
        placeType: "COMPANY",
        rightAccessType: "OWNER",
        rootPlaceName: "",
        subPlaceName: "",
        name: "Residence Mont Calm 3",
        placePictureUrl:
          "https://images.unsplash.com/photo-1583377519891-1eea1c2e3947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        address: {
          addressLines: "",
          locality: "",
          region: "",
          zipCode: 90000,
          country: "",
        },
        actions: [
          {
            id: "",
            name: "Main Office",
            actionType: "GATE",
            longitude: "0",
            latitude: "0",
          },
          {
            id: "",
            name: "Main Entrance",
            actionType: "DOOR",
            longitude: "0",
            latitude: "0",
          },
          {
            id: "",
            name: "Hallway",
            actionType: "GARAGE",
            longitude: "0",
            latitude: "0",
          },
          {
            id: "",
            name: "Main Office 2",
            actionType: "GATE",
            longitude: "0",
            latitude: "0",
          },
        ],
      },
    ])
  );
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

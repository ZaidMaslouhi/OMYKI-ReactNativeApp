import React, { useState } from "react";
import { FlatList } from "react-native";
import ModalInformation from "../../components/ModalInformation";
import ShareButton from "../../components/ShareButton";
import ActionBar from "../../components/ActionBar";
import KeysCarousel from "../../components/KeysCarousel";
import KeyCard from "../../components/KeyCard";
import Place from "../../interfaces/Place";

const Places: Place[] = [
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
];

function Keychain() {
  const [activePlace, setActivePlace] = useState<Place>(Places[0]);

  return (
    <>
      <ActionBar title="Keychain" />

      {Places.length > 0 ? (
        <>
          <KeysCarousel places={Places} />

          <FlatList
            numColumns={2}
            data={activePlace.actions}
            contentContainerStyle={{ padding: 8 }}
            renderItem={({ item, index }) => {
              return (
                <KeyCard
                  key={index}
                  keyName={item.name}
                  isLocked={index % 2 == 0}
                  isNearby={index === 0}
                />
              );
            }}
          />
        </>
      ) : (
        <ModalInformation
          title="You do not have any keys"
          icon={require("../../assets/images/Lock.png")}
          description="Sorry, you do not have access keys. Please contact your application administration to request access."
          onPressButton={() => () => {}}
        />
      )}

      <ShareButton />
    </>
  );
}

export default Keychain;

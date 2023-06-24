import React from "react";
import { FlatList } from "react-native";
import ModalInformation from "../../components/ModalInformation";
import ShareButton from "../../components/ShareButton";
import ActionBar from "../../components/ActionBar";
import KeysCarousel from "../../components/KeysCarousel";
import KeyCard from "../../components/KeyCard";

const Keys = [
  {
    name: "Main Entrance",
    isLocked: false,
    isNearby: true,
  },
  {
    name: "Hallway",
    isLocked: true,
    isNearby: false,
  },
  {
    name: "Main Office",
    isLocked: true,
    isNearby: false,
  },
];

function Keychain() {
  return (
    <>
      <ActionBar title="Keychain" />

      {Keys.length > 0 ? (
        <>
          <KeysCarousel />

          <FlatList
            numColumns={2}
            data={Keys}
            contentContainerStyle={{ padding: 8 }}
            renderItem={({ item, index }) => {
              return (
                <KeyCard
                  key={index}
                  keyName={item.name}
                  isLocked={item.isLocked}
                  isNearby={item.isNearby}
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

import React, { useState } from "react";
import { FlatList } from "react-native";
import ModalInformation from "../../components/ModalInformation";
import ShareButton from "../../components/ShareButton";
import ActionBar from "../../components/ActionBar";
import KeysCarousel from "../../components/KeysCarousel";
import KeyCard from "../../components/KeyCard";
import Place from "../../interfaces/Place";
import { useQuery } from "react-query";
import { GetAllPlacesByUser } from "../../services/place";
import LoadingIndicator from "../../components/LoadingIndicator";

function Keychain() {
  const { isLoading, data: Places } = useQuery<unknown, string, Place[]>(
    "places",
    GetAllPlacesByUser
  );

  const [activePlace, setActivePlace] = useState<Place | null>(null);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <ActionBar title="Keychain" />
      {Places && Places.length > 0 ? (
        <>
          <KeysCarousel
            places={Places}
            activePlace={(index) => setActivePlace(Places[index])}
          />

          <FlatList
            numColumns={2}
            data={activePlace?.actions || Places[0].actions}
            contentContainerStyle={{ padding: 8 }}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item, index }) => {
              return (
                <KeyCard
                  key={item.name + index}
                  action={item}
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
          onPressButton={() => {}}
        />
      )}
      <ShareButton />
    </>
  );
}

export default Keychain;

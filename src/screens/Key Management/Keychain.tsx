import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import ModalInformation from "../../components/ModalInformation";
import ShareButton from "../../components/ShareButton";
import ActionBar from "../../components/ActionBar";
import KeysCarousel from "../../components/KeysCarousel";
import KeyCard from "../../components/KeyCard";
import Place from "../../interfaces/Place";
import { useQuery } from "react-query";
import { GetAllPlacesByUser } from "../../services/place";
import Colors from "../../theme/colors";

function Keychain() {
  const {
    data: Places,
    isSuccess,
    isLoading,
    isError,
  } = useQuery<unknown, string, Place[]>("places", GetAllPlacesByUser);

  const [activePlace, setActivePlace] = useState<Place | null>(null);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: Colors.brand }}>Loading...</Text>
      </View>
    );
  } else if (isSuccess) console.log(Places);
  else if (isError) console.log("ERROR");

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
            // data={Places[0].actions}
            contentContainerStyle={{ padding: 8 }}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item, index }) => {
              return (
                <KeyCard
                  key={item.name + index}
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
          onPressButton={() => {}}
        />
      )}
      <ShareButton />
    </>
  );
}

export default Keychain;

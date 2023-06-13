import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import ModalInformation from "../../components/ModalInformation";
import ActionBar from "../../components/ActionBar";
import ShareButton from "../../components/ShareButton";
import KeyItem from "../../components/KeyManagmentItem";

const Keys = [
  {
    accessKey: "The gardens by Délicis",
    appartments: 2,
    devices: 3,
    members: [
      { uri: require("../../assets/icons/member1.png") },
      { uri: require("../../assets/icons/member2.png") },
      { uri: require("../../assets/icons/member3.png") },
    ],
  },
  {
    accessKey: "Beaumont Green",
    appartments: 1,
    devices: 2,
    members: [
      { uri: require("../../assets/icons/member2.png") },
      { uri: require("../../assets/icons/member1.png") },
      { uri: require("../../assets/icons/member3.png") },
    ],
  },
  {
    accessKey: "Les Mazets",
    appartments: 3,
    devices: 4,
    members: [
      { uri: require("../../assets/icons/member3.png") },
      { uri: require("../../assets/icons/member2.png") },
      { uri: require("../../assets/icons/member1.png") },
    ],
  },
];

function KeyManagement() {
  return (
    <>
      <ActionBar
        title="Key management"
        withBack={true}
        onPress={() => () => {}}
      />

      {Keys.length > 0 ? (
        <FlatList
          data={Keys}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ padding: 16, gap: 8 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} onPress={() => () => {}}>
              <KeyItem key={item.accessKey} {...item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <ModalInformation
          icon={require("../../assets/icons/key.png")}
          title="No shared keys"
          description="To share the key with your friends and colleagues, go to the Keychain page and click 'Share Access'."
          buttonText="Give permanent access"
          onPressButton={() => () => {}}
        />
      )}

      <ShareButton />
    </>
  );
}

export default KeyManagement;

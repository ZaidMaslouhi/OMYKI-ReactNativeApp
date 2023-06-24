import React, { useRef } from "react";
import { FloatingAction } from "react-native-floating-action";
import PermanentAccess from "./PermanentAccessBottomSheet";
import TimeAccessBottomSheet from "./TimeAccessBottomSheet";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ShareIcon from "../assets/icons/Share.svg";
import LinkKeyIcon from "../assets/icons/LinkKey.svg";
import KeyIcon from "../assets/icons/Key.svg";
import { Text, View } from "react-native";

type AccessType = "Temporarily" | "Permanent";

function ShareButton() {
  const timeAccessModal = useRef<BottomSheetModal>(null);
  const permanentAccessModal = useRef<BottomSheetModal>(null);

  const handleMenuItemPress = (accessType: AccessType) => {
    if (accessType === "Temporarily") {
      timeAccessModal.current?.present();
    } else if (accessType === "Permanent") {
      permanentAccessModal.current?.present();
    }
  };

  return (
    <>
      <TimeAccessBottomSheet bottomSheetRef={timeAccessModal} />
      <PermanentAccess bottomSheetRef={permanentAccessModal} />
      <FloatingAction
        actions={[
          {
            name: "Temporarily",
            animated: true,
            render: () => (
              <View
                key={"Temporarily"}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  padding: 16,
                  backgroundColor: Colors.white,
                  borderWidth: 1,
                  borderColor: Colors.dark100,
                  borderRadius: 32,
                }}
              >
                <LinkKeyIcon stroke={Colors.dark} strokeWidth={1.5} />
                <Text
                  style={{
                    fontSize: Fonts.Size.font14,
                    fontWeight: Fonts.Weight.semi,
                    color: Colors.dark,
                  }}
                >
                  Time access
                </Text>
              </View>
            ),
          },
          {
            name: "Permanent",
            animated: true,
            render: () => (
              <View
                key={"Permanent"}
                style={{
                  position: "absolute",
                  right: 100,
                  top: "120%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  padding: 16,
                  backgroundColor: Colors.white,
                  borderWidth: 1,
                  borderColor: Colors.dark100,
                  borderRadius: 32,
                }}
              >
                <KeyIcon stroke={Colors.dark} strokeWidth={1.5} />
                <Text
                  style={{
                    fontSize: Fonts.Size.font14,
                    fontWeight: Fonts.Weight.semi,
                    color: Colors.dark,
                  }}
                >
                  Permanent access
                </Text>
              </View>
            ),
          },
        ]}
        animated={true}
        distanceToEdge={16}
        buttonSize={54}
        position="right"
        color={Colors.brand}
        showBackground={false}
        floatingIcon={<ShareIcon stroke={Colors.white} strokeWidth={1.5} />}
        onPressItem={(name) => handleMenuItemPress(name as AccessType)}
      />
    </>
  );
}

export default ShareButton;

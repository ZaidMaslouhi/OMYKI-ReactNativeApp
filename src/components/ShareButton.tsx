import React, { useRef } from "react";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/Feather";
import { Image } from "react-native";
import PermanentAccess from "./PermanentAccessBottomSheet";
import TimeAccessBottomSheet from "./TimeAccessBottomSheet";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type AccessType = "Time" | "Permanent";

function ShareButton() {
  const timeAccessModal = useRef<BottomSheetModal>(null);
  const permanentAccessModal = useRef<BottomSheetModal>(null);

  const handleMenuItemPress = (accessType: AccessType) => {
    if (accessType === "Time") {
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
        animated={true}
        actions={[
          {
            name: "Time",
            text: "Time access",
            icon: (
              <Icon
                name="clock"
                style={{
                  height: 22,
                  color: Colors.white,
                  fontSize: Fonts.Size.font20,
                }}
              />
            ),
            color: Colors.brand,
            textColor: Colors.brand,
            tintColor: Colors.brand,
          },
          {
            name: "Permanent",
            text: "Permanent access",
            icon: (
              <Icon
                name="key"
                style={{
                  height: 22,
                  color: Colors.white,
                  fontSize: Fonts.Size.font20,
                }}
              />
            ),
            color: Colors.brand,
            textColor: Colors.brand,
            tintColor: Colors.brand,
          },
        ]}
        onPressItem={(name) => handleMenuItemPress(name as AccessType)}
        color={Colors.brand}
        position="right"
        showBackground={false}
        floatingIcon={
          <Image source={require("../assets/icons/share-icon.png")} />
        }
      />
    </>
  );
}

export default ShareButton;

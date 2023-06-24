import React, { RefObject, useState } from "react";
import BottomSheetComponent from "./BottomSheetComponent";
import {
  FlatList,
  Platform,
  View,
  Text,
  Share,
  TouchableOpacity,
} from "react-native";
import HorizontalList from "./HorizontalList";
import CircularInputPicker from "./CircularInputPicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "./Button";
import Colors from "../theme/colors";
import { Fonts } from "../theme/fonts";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const Devices = [
  "Main entrance",
  "Garage",
  "Bat A barrier",
  "Main entrance",
  "Garage",
  "Bat A barrier",
];

const AccessDuration = [
  {
    title: "1 Hour",
    active: true,
  },
  {
    title: "6 Hour",
    active: false,
  },
  {
    title: "24 Hour",
    active: false,
  },
  {
    title: "Set time",
    active: false,
  },
];

function TimeAccessBottomSheet({
  bottomSheetRef,
}: {
  bottomSheetRef: RefObject<BottomSheetModal>;
}) {
  const [activeAccessDuration, setActiveAccessDuration] = useState(
    AccessDuration.findIndex(
      (el: { title: string; active: boolean }) => el.active
    )
  );

  return (
    <BottomSheetComponent title={"Time access"} bottomSheetRef={bottomSheetRef}>
      <>
        <View style={{ gap: 10 }}>
          <Text style={{ color: Colors.dark, fontFamily: Fonts.Family.brand }}>
            Device
          </Text>
          <HorizontalList items={Devices} />
        </View>

        <View style={{ gap: 10 }}>
          <Text style={{ color: Colors.dark, fontFamily: Fonts.Family.brand }}>
            Access duration
          </Text>
          <FlatList
            contentContainerStyle={{
              backgroundColor: Colors.neutral3,
              borderRadius: 16,
              overflow: "hidden",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            data={AccessDuration}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveAccessDuration(index)}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 16,
                  borderWidth: activeAccessDuration === index ? 2 : 0,
                  borderColor:
                    activeAccessDuration === index ? Colors.brand : Colors.dark,
                }}
              >
                <Text
                  style={{
                    color:
                      activeAccessDuration === index
                        ? Colors.brand
                        : Colors.dark,
                    fontFamily: Fonts.Family.brand,
                    fontWeight:
                      activeAccessDuration === index
                        ? Fonts.Weight.semi
                        : Fonts.Weight.normal,
                    fontSize: Fonts.Size.font12,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Platform.OS === "ios" ? (
              <DateTimePicker
                value={new Date()}
                mode={"time"}
                is24Hour={true}
                display="spinner"
              />
            ) : (
              <CircularInputPicker />
            )}
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Button
            title={"Generate a link"}
            primary
            onPress={async () => {
              const result = await Share.share(
                {
                  message: `Access Key Shared with You: \nhttps://www.google.com/`,
                },
                { dialogTitle: "OMYKI | Share Your Access Key" }
              );
              console.log("Shared Key: ", result);
            }}
          />
        </View>
      </>
    </BottomSheetComponent>
  );
}

export default TimeAccessBottomSheet;

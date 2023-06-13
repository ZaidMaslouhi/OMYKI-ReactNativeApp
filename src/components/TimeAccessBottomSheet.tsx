import React, { RefObject } from "react";
import BottomSheetComponent from "./BottomSheetComponent";
import { FlatList, Platform, View, Text } from "react-native";
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
              <View
                key={index}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 16,
                  borderWidth: item.active ? 2 : 0,
                  borderColor: item.active ? Colors.brand : Colors.dark,
                }}
              >
                <Text
                  style={{
                    color: item.active ? Colors.brand : Colors.dark,
                    fontFamily: Fonts.Family.brand,
                    fontWeight: item.active
                      ? Fonts.Weight.semi
                      : Fonts.Weight.normal,
                    fontSize: Fonts.Size.font12,
                  }}
                >
                  {item.title}
                </Text>
              </View>
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
          <Button title={"Generate a link"} primary onPress={() => () => {}} />
        </View>
      </>
    </BottomSheetComponent>
  );
}

export default TimeAccessBottomSheet;

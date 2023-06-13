import React, { RefObject, ReactElement } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import BottomSheetHeader from "./BottomSheetHeader";
import Colors from "../theme/colors";

const BottomSheetComponent = ({
  bottomSheetRef,
  title,
  children,
}: {
  bottomSheetRef: RefObject<BottomSheetModal>;
  title: string;
  children: JSX.Element;
}) => {
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <BottomSheetModalProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
        }}
      >
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={["75%"]}
          onDismiss={closeBottomSheet}
          handleComponent={() => (
            <View style={styles.handle}>
              <View style={styles.handleIndicator} />
            </View>
          )}
          backdropComponent={() => (
            <TouchableOpacity
              style={styles.overlay}
              activeOpacity={1}
              onPress={closeBottomSheet}
            />
          )}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              minHeight: "100%",
              gap: 16,
              padding: 16,
              backgroundColor: "white",
            }}
          >
            <BottomSheetHeader
              title={title}
              closeBottomSheet={closeBottomSheet}
            />
            {children}
          </ScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    padding: 50,
    backgroundColor: "lightblue",
    borderRadius: 5,
  },
  handle: {
    alignItems: "center",
    paddingTop: 8,
  },
  handleIndicator: {
    width: 40,
    height: 4,
    backgroundColor: Colors.dark,
    borderRadius: 2,
  },
  closeButton: {
    alignItems: "center",
    padding: 10,
  },
  overlay: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: Colors.dark100,
  },
});

export default BottomSheetComponent;

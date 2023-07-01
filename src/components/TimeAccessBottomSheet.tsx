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
import { useMutation, useQuery } from "react-query";
import { ShareTemporarily } from "../services/share";
import ReactQueryClient from "../config/reactQueryClient";
import Action from "../interfaces/Action";
import { GetAllPlacesByUser } from "../services/place";
import Place from "../interfaces/Place";
import * as yup from "yup";
import { Formik } from "formik";
import { UserProfile } from "../interfaces/User";
import { GetUserProfile } from "../services/account";

const validationSchema = yup.object({
  devices: yup.array(yup.string()).required(),
  requestedPlaceId: yup.string().required(),
  duration: yup.date().required(),
});

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
  const [activeAccessDuration, setActiveAccessDuration] = useState(0);

  const [values, setValues] =
    useState<yup.InferType<typeof validationSchema>>();

  const { data: userProfile } = useQuery<unknown, string, UserProfile>(
    "profile",
    GetUserProfile
  );

  const { data: Devices } = useQuery<unknown, string, Action[]>(
    "places",
    GetAllPlacesByUser,
    {
      select: (data: any) => data.map((place: Place) => place.actions),
    }
  );

  const shareAccessTemporarily = useMutation(ShareTemporarily, {
    onSuccess: () => ReactQueryClient.invalidateQueries("places"),
  });

  const handleTemporarilyShareForm = async (values: any) => {
    console.log(values);
    const validatedValues = await validationSchema.validate(values);
    if (validatedValues) {
      const values = {
        id: "",
        fromUserId: (userProfile as UserProfile).user.id,
        requestedPlaceId: validatedValues.requestedPlaceId,
        actionsIds: validatedValues.devices as string[],
        start: validatedValues.duration,
        end: validatedValues.duration,
      };
      shareAccessTemporarily.mutate(
        { ...values },
        {
          onSuccess: async ({ data }) => {
            const result = await Share.share(
              {
                message: `A Temporarily Access Key Shared with You: \n${data}`,
              },
              { dialogTitle: "OMYKI | Share Your Access Key" }
            );
            console.log("Shared Key: ", result);
            bottomSheetRef.current?.close();
          },
        }
      );
    } else {
      console.error("Invalid form data!"); // Show validation errors
    }
  };

  return (
    <BottomSheetComponent title={"Time access"} bottomSheetRef={bottomSheetRef}>
      <Formik
        initialValues={{ ...values }}
        validationSchema={validationSchema}
        onSubmit={handleTemporarilyShareForm}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <>
            <View style={{ gap: 10 }}>
              <Text
                style={{ color: Colors.dark, fontFamily: Fonts.Family.brand }}
              >
                Device
              </Text>
              {Devices && (
                <HorizontalList
                  items={Devices}
                  onChange={handleChange("devices")}
                />
              )}
            </View>

            <View style={{ gap: 10 }}>
              <Text
                style={{ color: Colors.dark, fontFamily: Fonts.Family.brand }}
              >
                Access duration
              </Text>
              <FlatList
                horizontal={true}
                scrollEnabled={false}
                style={{
                  backgroundColor: Colors.neutral3,
                  overflow: "hidden",
                  borderRadius: 32,
                }}
                contentContainerStyle={{
                  flex: 1,
                  borderRadius: 32,
                  borderWidth: 2,
                  justifyContent: "space-between",
                  alignItems: "stretch",
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
                      borderWidth: 2,
                      borderColor:
                        activeAccessDuration === index
                          ? Colors.brand
                          : Colors.neutral3,
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
                onPress={() => handleSubmit()}
              />
            </View>
          </>
        )}
      </Formik>
    </BottomSheetComponent>
  );
}

export default TimeAccessBottomSheet;

import React from "react";
import ModalInformation from "../../components/ModalInformation";
import { useNavigation } from "@react-navigation/native";

function Congratulations() {
  const navigation = useNavigation();

  return (
    <ModalInformation
      icon={require("../../assets/images/Congratulations.png")}
      title="Congratulations"
      description="You have successfully registered. Now you can start using our application and enjoy all its features"
      buttonText="Continue"
      onPressButton={() => navigation.navigate("Home")}
    />
  );
}

export default Congratulations;

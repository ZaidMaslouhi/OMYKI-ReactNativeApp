import React from "react";
import ModalInformation from "../../components/ModalInformation";

function Congratulations() {
  return (
    <ModalInformation
      icon={require("../../assets/icons/congratulations.png")}
      title="Congratulations"
      description="You have successfully registered. Now you can start using our application and enjoy all its features"
      buttonText="Continue"
      onPressButton={() => () => {}}
    />
  );
}

export default Congratulations;

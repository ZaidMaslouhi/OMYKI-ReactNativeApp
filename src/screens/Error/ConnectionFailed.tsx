import React from "react";
import ModalInformation from "../../components/ModalInformation";

function ConnectionFailed() {
  return (
    <ModalInformation
      buttonText="Refresh"
      title="Connection failed"
      icon={require("../../assets/images/ConnectionFailed.png")}
      description="Connection error. Try later or contact support."
      onPressButton={() => () => {}}
    />
  );
}

export default ConnectionFailed;

import React from "react";
import ModalInformation from "../../components/ModalInformation";

function NotFound() {
  return (
    <ModalInformation
      title="404"
      buttonText="Back to Home"
      icon={require("../../assets/images/404.png")}
      description="The page does not exist. Check the application or contact support."
      onPressButton={() => () => {}}
    />
  );
}

export default NotFound;

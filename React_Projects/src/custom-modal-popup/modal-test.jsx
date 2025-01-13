import { useState } from "react";
import Modal from "./modal";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Model Popup</button>
      {/*If the left-hand side is false, the whole expression is false,
       and the right-hand side is ignored.*/}
      {showModalPopup && <Modal />}

      {/*
      Alternative
      {showModalPopup ? <Modal /> : null}
      */}
    </div>
  );
};

export default ModalTest;

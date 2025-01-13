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
      {showModalPopup && <Modal/>}
    </div>
  );
};

export default ModalTest;

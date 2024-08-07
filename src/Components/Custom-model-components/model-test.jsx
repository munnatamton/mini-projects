import React, { useState } from "react";
import Model from "./model";
import "./model.css";

const ModelTest = () => {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleToggleModelPopup() {
    setShowModelPopup(!showModelPopup);
  }
  function onClose() {
    setShowModelPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModelPopup}>Open model Popup</button>
      {showModelPopup && (
        <Model
        id={'custom-id'}
          header={<h1>Customized Header</h1>}
          footer={<h3>Customized Footer</h3>}
          onClose={onClose}
          body={<div>Customized Body</div>}
        />
      )}
    </div>
  );
};

export default ModelTest;

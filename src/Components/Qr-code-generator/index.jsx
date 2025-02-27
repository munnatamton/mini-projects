import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <>
      <div>
        <h1>QR Code Generator</h1>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value"
        ></input>
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </>
  );
};

export default QrCodeGenerator;

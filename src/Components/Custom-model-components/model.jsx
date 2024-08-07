import React from "react";

const Model = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className='model'>
      <div className="model-content">
        <div className="header">
          <span onClick={onClose} className="close-model-icon">&times;</span>
          <h1>{header ? header : "Header"}</h1>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Model</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h3>Footer</h3>}</div>
      </div>
    </div>
  );
};

export default Model;

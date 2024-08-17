import React, { useRef, useState } from "react";
import UseOutsideClick from ".";

const UseOnclickOutsideTest = () => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  UseOutsideClick(ref,()=>setShowContent(false))
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is random Content</h1>
          <p>Please click outside of this content to close</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnclickOutsideTest;

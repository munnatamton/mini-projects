import React, { useEffect } from "react";

const UseOutsideClick = (ref, target) => {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    };
  }, [handler, ref]);
  return <div></div>;
};

export default UseOutsideClick;

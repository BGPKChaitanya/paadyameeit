import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RingLoader color="#058037" />
    </div>
  );
};

export default Loading;

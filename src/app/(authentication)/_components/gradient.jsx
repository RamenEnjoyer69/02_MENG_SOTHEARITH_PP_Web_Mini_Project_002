import React from "react";

const Gradient = ({ children }) => {
  return (
    <div className="w-full h-full grid place-items-center bg-gradient-to-tr from-indigo-500/80 via-pink-300/70 bg-white ">
      {children}
    </div>
  );
};

export default Gradient;

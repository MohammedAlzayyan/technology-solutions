import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={` p-6 rounded-xl shadow-xl hover:bg-[#01486A] hover:text-white ${className} `}
    >
      {children}
    </div>
  );
};

export default Card;

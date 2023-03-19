import React from "react";

const Card = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`text-white rounded-full bg-gradient-to-br from-red to-secondary hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-lg w-[200px] py-4 text-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Card;

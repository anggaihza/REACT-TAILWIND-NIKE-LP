import React from "react";
import {statistics} from "../constants";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex rounded-full justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } ${fullWidth && "w-full"}`}>
      {label}

      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 rounded-full w-5 h-5"
          alt="arrow right"
        />
      )}
    </button>
  );
};

export default Button;

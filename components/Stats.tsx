import React from "react";

interface value {
  text: string;
  value: string;
}

const Stats: React.FC<value> = ({ text, value }) => {
  return (
    <div className="flex justify-center items-start">
      <p className="font-poppins text-xs flex-1 text-dimWhite">{text}</p>
      <p className="font-poppins text-xs text-white">${value}M</p>
    </div>
  );
};

export default Stats;

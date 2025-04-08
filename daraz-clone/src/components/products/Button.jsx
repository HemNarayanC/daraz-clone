import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        style={{ backgroundColor: props.color }}
        className={`w-[236px] h-10 ${props.color} border-none text-white rounded-[2px] p-2 text-[18px] hover:cursor-pointer`}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;

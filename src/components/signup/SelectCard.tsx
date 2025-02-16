import React, { useEffect } from "react";

const SelectCard = ({ title, icon, setSelected, selected, type }) => {
  const isChecked = selected === type; // Dynamic check condition
  useEffect(() => {
    localStorage.setItem("type user", selected);
  }, [selected]);
  return (
    <div
      onClick={() => setSelected(type)}
      className={` border-[3px] p-3 rounded-lg w-[300px] flex flex-col gap-5 cursor-pointer transition-all duration-300 ${
        isChecked ? "border-blue-500" : "border-gray-300 opacity-50"
      }`}
    >
      <div className="flex justify-between">
        <img src={icon} alt={title} />
        <div className="rounded-full border-2 border-blue-500 w-6 h-6 flex items-center justify-center">
          {isChecked && (
            <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
    </div>
  );
};

export default SelectCard;

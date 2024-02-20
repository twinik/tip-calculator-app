/* eslint-disable react/prop-types */
import { useState } from "react";

const Input = ({ label, icon: Icon, value, onChange }) => {
  const [peopleError, setPeopleError] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const parsedValue = parseFloat(inputValue);
    if (
      label === "Number of People" &&
      (isNaN(parsedValue) || parsedValue <= 0)
    ) {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }

    if (isNaN(parsedValue) || parsedValue < 0) {
      onChange(0);
    } else {
      onChange(parsedValue);
    }
  };

  return (
    <div className="text-darkGrayishCyan">
      <div className="flex flex-row justify-between">
        <p className="text-lg font-bold">{label}</p>
        {peopleError && (
          <p className="text-errorRed text-xl font-bold">Can&apos;t be zero</p>
        )}
      </div>
      <div className="relative">
        <span className="absolute text-grayishCyan inset-y-0 left-0 pl-4 flex items-center">
          {Icon && <Icon size={22} className="mt-2" />}
        </span>
        <input
          className={`w-full bg-veryLightGrayishCyan placeholder:text-grayishCyan text-right font-extrabold text-3xl focus:border-strongCyan p-2 rounded-md mt-2 ${
            peopleError ? "border-errorRed" : ""
          }`}
          type="number"
          inputMode="numeric"
          value={value}
          placeholder="0"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;

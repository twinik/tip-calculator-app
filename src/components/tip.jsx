/* eslint-disable react/prop-types */
import { useState } from "react";

const Tip = ({ value, onChange }) => {
  const [selectedPercentage, setSelectedPercentage] = useState(null);

  const handleButtonClick = (percentage) => {
    setSelectedPercentage(percentage);
    onChange(percentage);
  };

  const handleChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    if (isNaN(inputValue) || inputValue < 0) {
      e.target.value = 0;
    } else if (inputValue > 100) {
      e.target.value = 100;
    }
    setSelectedPercentage(e.target.value);
    onChange(e.target.value);
  };

  const selectedColor = "bg-strongCyan text-veryDarkCyan";
  const defaultColor = "bg-veryDarkCyan text-white";

  return (
    <div className="my-5">
      <p className="text-xl font-bold">Select Tip %</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {[5, 10, 15, 25, 50].map((percentage) => (
          <button
            key={percentage}
            onClick={() => handleButtonClick(percentage)}
            className={`${
              selectedPercentage === percentage ? selectedColor : defaultColor
            } font-bold text-3xl p-4 rounded-md hover:bg-strongCyan hover:text-veryDarkCyan active:bg-strongCyan transition-colors`}
          >
            {percentage}%
          </button>
        ))}
        <input
          className="bg-veryLightGrayishCyan placeholder:text-grayishCyan text-right font-extrabold text-3xl focus:border-strongCyan w-full p-2 rounded-md mt-2"
          type="number"
          inputMode="numeric"
          value={value}
          placeholder="Custom"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Tip;

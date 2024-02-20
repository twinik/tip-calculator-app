/* eslint-disable react/prop-types */
import { useState } from "react";

const Result = ({ bill, tip, people }) => {
  const [tipxperson, setTipxperson] = useState(0.0);
  const [totalxperson, setTotalxperson] = useState(0.0);

  const calculate = () => {
    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    const tipPerPerson = tipAmount / people;
    const totalPerPerson = totalAmount / people;
    setTipxperson(tipPerPerson.toFixed(2));
    setTotalxperson(totalPerPerson.toFixed(2));
  };

  if (bill && tip && people) {
    calculate();
  }

  return (
    <div className="bg-veryDarkCyan rounded-xl py-6 px-5 mt-5">
      <div>
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="flex-col font-semibold">
            <p className="text-white">Tip amount</p>
            <p className="text-grayishCyan">/ person</p>
          </div>
          <p className="text-strongCyan text-4xl font-bold">${tipxperson}</p>
        </div>
        <div className="flex flex-row justify-between items-center mb-5">
          <div className="flex-col font-semibold">
            <p className="text-white">Total</p>
            <p className="text-grayishCyan">/ person</p>
          </div>
          <p className="text-strongCyan text-4xl font-bold">${totalxperson}</p>
        </div>
      </div>
      <button className="rounded-lg bg-strongCyan text-veryDarkCyan w-full py-3 font-bold text-xl">
        RESET
      </button>
    </div>
  );
};

export default Result;

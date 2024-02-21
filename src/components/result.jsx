/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Result = ({ bill, tip, people, setBill, setTip, setPeople }) => {
  const [tipxperson, setTipxperson] = useState(0);
  const [totalxperson, setTotalxperson] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const tipAmount = (bill * tip) / 100;
      const totalAmount = bill + tipAmount;
      const tipPerPerson = tipAmount / people;
      const totalPerPerson = totalAmount / people;
      setTipxperson(parseFloat(tipPerPerson.toFixed(2)));
      setTotalxperson(parseFloat(totalPerPerson.toFixed(2)));
    };

    if (bill && tip && people) {
      calculate();
    }
  }, [bill, tip, people]);

  const resetValues = () => {
    setBill("");
    setTip("");
    setPeople("");
    setTipxperson(0);
    setTotalxperson(0);
  };

  return (
    <div className="bg-veryDarkCyan rounded-xl py-6 px-5 mt-5 lg:h-full lg:mt-0 lg:p-10 lg:flex lg:flex-col lg:justify-between">
      <div>
        <div className="flex flex-row justify-between items-center mb-3 lg:mb-10">
          <div className="flex-col font-semibold">
            <p className="text-white">Tip amount</p>
            <p className="text-grayishCyan">/ person</p>
          </div>
          <p className="text-strongCyan text-4xl lg:text-5xl font-bold">
            ${tipxperson.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mb-5">
          <div className="flex-col font-semibold">
            <p className="text-white">Total</p>
            <p className="text-grayishCyan">/ person</p>
          </div>
          <p className="text-strongCyan text-4xl lg:text-5xl font-bold">
            ${totalxperson.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={resetValues}
        className="rounded-lg bg-strongCyan text-veryDarkCyan w-full py-3 font-bold text-xl hover:bg-lightGrayishCyan"
      >
        RESET
      </button>
    </div>
  );
};

export default Result;

/* eslint-disable react/prop-types */
const Input = ({ label, icon: Icon, value, onChange }) => {
  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value < 0) {
      e.target.value = 0;
    }
    onChange(e.target.value);
  };

  return (
    <div className="text-darkGrayishCyan">
      <p className="text-xl font-bold">{label}</p>
      <div className="relative">
        <span className="absolute text-grayishCyan inset-y-0 left-0 pl-4 flex items-center">
          {Icon && <Icon size={22} className="mt-2" />}
        </span>
        <input
          className="bg-veryLightGrayishCyan text-right font-extrabold text-3xl w-full p-2 rounded-md focus:border-strongCyan mt-2 placeholder:text-grayishCyan"
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

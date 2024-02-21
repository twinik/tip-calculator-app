import { useState } from "react";
import Input from "./components/input";
import Tip from "./components/tip";
import Result from "./components/result";
import { BiDollar, BiSolidUser } from "react-icons/bi";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  return (
    <div className="bg-lightGrayishCyan h-svh lg:p-20 lg:flex lg:flex-col lg:items-center">
      <div className="text-veryDarkCyan flex justify-center text-4xl items-center font-bold tracking-widest text-center h-1/6">
        SPLI
        <br />
        TTER
      </div>
      <div className="bg-white h-5/6 calculator p-10 lg:h-min lg:flex lg:flex-row lg:gap-3 lg:w-3/5">
        <div className="lg:flex-1 lg:pr-5">
          <Input label="Bill" icon={BiDollar} value={bill} onChange={setBill} />
          <Tip value={tip} onChange={setTip} />
          <Input
            label="Number of People"
            icon={BiSolidUser}
            value={people}
            onChange={setPeople}
          />
        </div>
        <div className="lg:flex-1">
          <Result
            bill={bill}
            tip={tip}
            people={people}
            setBill={setBill}
            setTip={setTip}
            setPeople={setPeople}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

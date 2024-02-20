import { useState } from "react";
import Input from "./components/input";
import Tip from "./components/tip";
import Result from "./components/result";
import { BiDollar, BiSolidUser } from "react-icons/bi";
import "./App.css";

function App() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [people, setPeople] = useState(null);

  return (
    <div className="bg-lightGrayishCyan h-svh">
      <div className="text-veryDarkCyan flex justify-center text-4xl items-center font-bold tracking-widest	text-center h-1/6">
        SPLITTER
      </div>
      <div className="bg-white h-5/6 calculator p-10">
        <Input label="Bill" icon={BiDollar} value={bill} onChange={setBill} />
        <Tip value={tip} onChange={setTip} />
        <Input
          label="Number of People"
          icon={BiSolidUser}
          value={people}
          onChange={setPeople}
        />
        <Result bill={bill} tip={tip} people={people} />
      </div>
    </div>
  );
}

export default App;

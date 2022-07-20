import React, { useState } from "react";
import "./App.css";
import Select from "./Select";
import Option from "./Option";
import OptionList from "./OptionList";

function App() {
  const [selectedOption, setSelectedOption] = useState('test');

  return (
    <div className="App">
      <Select 
      value={selectedOption} 
      defaultValue={"default"} 
      onChange={setSelectedOption}
      >
        <OptionList>
          <Option value={'one'}>one</Option>
          <Option value={'two'}>two</Option>
          <Option value={'three'}>three</Option>
        </OptionList>
      </Select>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Select from "./components/Select";
import Option from "./components/Option";
import OptionList from "./components/OptionList";

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

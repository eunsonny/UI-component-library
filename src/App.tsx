import React, { useState } from "react";
import Select from "./components/Select";
import Option from "./components/Option";
import OptionList from "./components/OptionList";

function App() {
  const [selectedOption, setSelectedOption] = useState(undefined);

  return (
    <div className="App">
      <Select
        disabled
        selectedOption={selectedOption}
        defaultOption={{ label: "하나", value: 1 }}
        onChange={setSelectedOption}
      >
        <OptionList>
          <Option data={{ label: "하나", value: 1 }} />
          <Option data={{ label: "둘", value: 2 }} />
          <Option data={{ label: "셋", value: 3 }} />
        </OptionList>
      </Select>
    </div>
  );
}

export default App;

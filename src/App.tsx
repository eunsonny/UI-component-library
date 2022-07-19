import React, { useState } from 'react'
import './App.css'
import Select from './Select';
import Option from './Option';
import OptionList from './OptionList';

function App() {
  const [value, setValue] = useState('');

  const handleChange = () => {

  }

  return (
    <div className="App">
     <Select
      defaultValue={'default'}
      label={''}
      onChange={handleChange}
     >
      <OptionList>
        <Option value={1}>one</Option>
        <Option value={2}>two</Option>
        <Option value={3}>three</Option>
      </OptionList>
     </Select>
    </div>
  )
}

export default App

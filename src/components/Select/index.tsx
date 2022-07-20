import React, { useEffect, useState } from "react";
import { SelectContext } from "./selectContext";
import useSelect from "./useSelect";

type SelectProps = {
  children: React.ReactNode;
  value?: string | number | boolean;
  defaultValue?: string | number | boolean;
  onChange?: Function;
};

const Select = ({
  children,
  value,
  defaultValue,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { option, setOption, open } = useSelect({
    propValue: value,
		defaultValue,
    open: isOpen,
  });

  const onSelectedOption = (option: any) => {
    setOption(option);
		onChange?.(option)
    setIsOpen(false);
  };

  const context = { option, open, onSelectedOption };
  return (
    <SelectContext.Provider value={context}>
      <button onClick={() => setIsOpen(true)}>
        <p>{option}</p>
      </button>
      {isOpen && children}
    </SelectContext.Provider>
  );
};

export default Select;

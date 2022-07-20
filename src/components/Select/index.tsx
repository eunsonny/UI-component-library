import React, { useEffect, useState } from "react";
import { SelectWrap, SelectButton } from "./Select.style";
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
    <SelectWrap>
      <SelectButton onClick={() => setIsOpen(!isOpen)}>
        <span>{option}</span>
      </SelectButton>
      <SelectContext.Provider value={context}>
        {isOpen && children}
      </SelectContext.Provider>
    </SelectWrap>
  );
};

export default Select;

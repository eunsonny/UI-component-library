import React, { useState } from "react";
import useControlled from "../../hooks/useControlled";
import { OptionData } from "../Option/type";

type UseSelectProps = {
  propOption?: OptionData;
  defaultOption?: OptionData;
  disabled?: boolean;
  placeholder?: string;
  onChange?: Function;
};

function useSelect({
  propOption,
  defaultOption,
  disabled,
  placeholder,
  onChange,
}: UseSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useControlled<OptionData>({
    controlled: propOption,
    defaultValue: defaultOption,
  });

  const onChangeOption = (option: OptionData) => {
    setOption(option);
    onChange?.(option);
    setIsOpen(false);
  };

  const isEmpty = (value: any) => {
    if (value === null || value === undefined) return true;
    if (typeof value === "object" && !value.value) return true;
  };

  const getRenderValue = () => {
    if (!!option) return option.label;
    if (!isEmpty(defaultOption) && isEmpty(option)) return defaultOption?.label;
    if (placeholder && isEmpty(option) && !disabled) return placeholder;
    if (isEmpty(option) && !disabled) return "선택";
  };

  return {
    option,
    isOpen,
    setIsOpen,
    onChangeOption,
    renderValue: getRenderValue(),
  };
}

export default useSelect;

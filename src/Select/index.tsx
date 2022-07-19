import React, { Fragment, useState } from "react";
import { SelectContext } from "./selectContext";
import useSelect from "./useSelect";


type SelectProps = {
	children: React.ReactNode;
	value?: string | number | boolean;
	propOption: any;
	defaultValue: string | number | boolean;
	label?: string;
	onChange: Function;
}

const Select = ({ children, propOption,  value, defaultValue, label, onChange }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	// const { value, onValueChange } = useSelect();
	const { selectedOption, open, setSelectedOption } = useSelect({ option: propOption, open: isOpen});
	
  const onSelectedOption = (option: any) => {
		setSelectedOption(option);
		setIsOpen(false);
	}	
	
	const context = { selectedOption, open, onSelectedOption };
  return (<SelectContext.Provider value={context}>
		<button onClick={() => setIsOpen(true)}>
			<p>{selectedOption}</p>
			{/* <p>{value}</p> */}
		</button>
		{isOpen && children}
	</SelectContext.Provider>
	);
}

export default Select;



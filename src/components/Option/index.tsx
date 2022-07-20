import React, { useContext } from 'react';
import { SelectOption } from '../Select/Select.style';
import { SelectContext } from '../Select/selectContext';

type OptionProps<TValue> = {
	value: TValue,
	children: React.ReactNode
}

const Option = ({ value, children }: OptionProps<string | number | boolean>) => {
	const context = useContext(SelectContext);

	return (
		<SelectOption 
		  onClick={() => context?.onSelectedOption(value)}
			isSelected={context?.option === value}
			>
			{children}
		</SelectOption>
	)
}

export default Option;
import React, { useContext } from 'react';
import { SelectContext } from '../Select/selectContext';

type OptionProps<TValue> = {
	value: TValue,
	children: React.ReactNode
}

const Option = ({ value, children }: OptionProps<string | number | boolean>) => {
	const context = useContext(SelectContext);

	console.log(context)

	return (
		<li onClick={() => context?.onSelectedOption(value)}>{children}</li>
	)
}

export default Option;
import React, { useContext } from 'react';
import { SelectOption } from '../Select/Select.style';
import { SelectContext } from '../Select/selectContext';
import { OptionData } from './type';

interface OptionProps {
	data: OptionData;
}

const Option: React.FC<OptionProps> = ({ data }) => {
	const context = useContext(SelectContext);

	return (
		<SelectOption
			role={'selectOption'}
			onClick={() => context?.onChangeOption(data)}
			isSelected={context?.option?.value === data.value}
		>
			{data.label}
		</SelectOption>
	);
};

export default Option;

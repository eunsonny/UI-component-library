import React from 'react';
import type { OptionData } from '../Option/type';
import { SelectWrap, SelectButton } from './Select.style';
import { SelectContext } from './selectContext';
import useSelect from './useSelect';

type SelectProps = {
	children: React.ReactNode;
	selectedOption?: OptionData;
	defaultOption?: OptionData;
	onChange?: Function;
	disabled?: boolean;
	placeholder?: string;
};

const Select: React.FC<SelectProps> = ({
	children,
	selectedOption,
	defaultOption,
	onChange,
	disabled,
	placeholder,
}) => {
	const { isOpen, setIsOpen, option, onChangeOption, renderValue } = useSelect({
		propOption: selectedOption,
		defaultOption,
		disabled,
		placeholder,
		onChange,
	});

	const context = { option, isOpen, onChangeOption };
	return (
		<SelectWrap data-testid="selectContainer" disabled={disabled}>
			<SelectButton
				onClick={() => {
					if (!disabled) {
						setIsOpen(!isOpen);
					}
				}}
				data-testid="selectButton"
			>
				<span>{renderValue}</span>
			</SelectButton>
			<SelectContext.Provider value={context}>
				{isOpen && children}
			</SelectContext.Provider>
		</SelectWrap>
	);
};

export default Select;

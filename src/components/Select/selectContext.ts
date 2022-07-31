import * as React from 'react';
import { OptionData } from '../Option/type';

export interface SelectContextType {
	isOpen: boolean;
	option?: OptionData;
	onChangeOption: Function
}

export const SelectContext = React.createContext<SelectContextType | undefined>(
	undefined
);

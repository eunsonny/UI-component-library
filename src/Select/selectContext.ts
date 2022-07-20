import * as React from 'react';

export interface SelectContextType  {
	open: boolean;
	option: any;
	onSelectedOption: any;
}

export const SelectContext = React.createContext<SelectContextType | undefined>(undefined);
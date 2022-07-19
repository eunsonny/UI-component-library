import * as React from 'react';

export interface SelectContextType  {
  // getOptionState: (value: any) => void;
	// getOptionProps: (value: any) => void;
	// value: any;
	open: boolean;
	// isOpen: boolean;
	selectedOption: any;
	onSelectedOption: any;
}

export const SelectContext = React.createContext<SelectContextType | undefined>(undefined);
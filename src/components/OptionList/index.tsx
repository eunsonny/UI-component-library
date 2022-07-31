import React, { useContext } from 'react';
import { SelectOptionList } from '../Select/Select.style';

type OptionListProps = {
	children: React.ReactNode;
};

const OptionList = ({ children }: OptionListProps) => {
	return <SelectOptionList>{children}</SelectOptionList>;
};

export default OptionList;

import React, { useContext } from "react";
import { SelectOptionList } from "../Select/Select.style";
import { SelectContext } from "../Select/selectContext";

type OptionListProps = {
	children: React.ReactNode;
}

const OptionList = ({ children }: OptionListProps) => {
	const context = useContext(SelectContext);

	return (
		<SelectOptionList>
			{children}
		</SelectOptionList>
  )
}
export default OptionList;

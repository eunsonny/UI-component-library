import React, { useContext } from "react";
import { SelectContext } from "../Select/selectContext";

type OptionListProps = {
	children: React.ReactNode;
}

const OptionList = ({ children }: OptionListProps) => {
	const context = useContext(SelectContext);

	return(<ul>
		{children}
	</ul>)
}
export default OptionList;

import React, { useState } from "react";
import useControlled from "../hooks/useControlled";

function useSelect(props: any) {
	const { option, open } = props;
	const [selectedOption, setSelectedOption] = useControlled({ controlled:option })


	return {
		selectedOption,
		open,
		setSelectedOption
	}
}

export default useSelect;

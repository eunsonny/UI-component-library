import React, { useState } from "react";
import useControlled from "../hooks/useControlled";

type Value = string | number | boolean;
type UseSelectProps<TValue> = {
	propValue?: TValue;
	defaultValue?: TValue;
	open: boolean;
}
function useSelect({ propValue, open, defaultValue }: UseSelectProps<Value>) {
	const [value, setValue] = useControlled({ controlled:propValue, defaultValue })

	return {
    option: value, 
		setOption: setValue,
		open
	}
}

export default useSelect;

import * as React from "react";

interface UseControlledProps<T> {
  controlled: T;
  defaultValue?: T;
}

const useControlled = <T>({
  controlled,
  defaultValue,
}: UseControlledProps<T>) => {
  const { current: isControlled } = React.useRef(controlled !== undefined);
  const [valueState, setValueState] = React.useState(defaultValue);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = React.useCallback((newValue: T) => {
    if (!isControlled) {
      setValueState(newValue);
    }
  }, []);

  return [value, setValueIfUncontrolled] as [
    typeof value,
    typeof setValueIfUncontrolled
  ];
};

export default useControlled;

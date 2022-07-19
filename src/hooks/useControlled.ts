import * as React from 'react';

interface Props<T> {
    controlled: T
    default?: T
}

const useControlled = <T>({ controlled, default: defaultProp,
}: Props<T>) => {
    const { current: isControlled } = React.useRef(controlled !== undefined);
    const [valueState, setValueState] = React.useState(defaultProp);
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

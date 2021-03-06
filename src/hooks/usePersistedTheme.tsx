import { useEffect, useState, Dispatch, SetStateAction } from "react";


type Reponse<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export function usePersistedTheme<T> (key: string, initialValue: T) {
    const storagedValue = localStorage.getItem(key);
    const  [state, setState] = useState(storagedValue ? JSON.parse(storagedValue) : initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
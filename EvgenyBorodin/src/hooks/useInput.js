import { useState } from 'react';

export default function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event === '' ? event : event.currentTarget.value)
    }

    return [state, setInput];
} 


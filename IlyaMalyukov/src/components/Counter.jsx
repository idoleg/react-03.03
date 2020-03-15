import React from 'react';



export const CounterFunc = ({ counter, handleCounter }) => {

    const handleClick = (event) => {
        const action = Number(event.currentTarget.dataset.action);
        handleCounter(action);
    }

    return (
        <p>
            <button data-action="-1" onClick={handleClick}>-1</button>
            {counter}
            <button data-action="1" onClick={handleClick}>+1</button>
        </p>
    )
}
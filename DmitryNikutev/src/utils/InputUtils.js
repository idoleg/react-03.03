import React, {useState} from 'react';


export const useInput = (initialState) => {
   const [state, setState] = useState(initialState);
   
   const setInput = (event) => {
      setState(event.currentTarget.value)
   };
   
   return [state, setInput];
};

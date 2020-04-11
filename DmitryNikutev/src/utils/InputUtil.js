import React, {useState} from 'react';


export const useInput = (initialState) => {
   const [state, setState] = useState(initialState);

   const setInput = (event) => {
      if (!event)
         setState("");
      else
         setState(event.currentTarget.value)
   };

   return [state, setInput];
};

//makes textfield submit form on enter key pressed
//new line is printed with shift+enter
export const enterKeyToSubmit = (event, submitFunc) => {
   if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitFunc(event);
   }
};

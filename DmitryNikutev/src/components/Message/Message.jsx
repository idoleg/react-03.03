import React from "react"


export const Message = ({name, text}) => {
   return (
      <li><strong>{name}:</strong> {text}</li>
   );
};

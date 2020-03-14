import React from "react"

export default function Message({name, text}) {
   return (
      <li><strong>{name}:</strong> {text}</li>
   );
}

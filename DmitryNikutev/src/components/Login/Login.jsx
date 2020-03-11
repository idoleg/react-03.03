import React, {Component} from "react";
import {useInput} from "../../utils/InputUtils";


export const Login = ({username, updateUsername}) => {
   
   const [inputUsername, setInputUsername] = useInput(username);
   
   const submitForm = (event) => {
      event.preventDefault();
      if (inputUsername.trim())
         updateUsername(inputUsername.trim());
   };
   
   return (
      <div>
         <b>Bot knows you as {username}</b>
         <form onSubmit={submitForm}>
            <input type="text"
                   placeholder="Introduce yourself"
                   value={inputUsername}
                   onChange={setInputUsername}/>
            <input type="submit" value="Done!"/>
         </form>
      </div>
   );
}

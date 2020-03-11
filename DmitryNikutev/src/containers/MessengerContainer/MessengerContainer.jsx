import React, {useState} from 'react';
import {Login} from "../../components/Login/Login";
import {ChatContainer} from "../ChatContainer/ChatContainer";

export const MessengerContainer = () => {
   const [username, setUsername] = useState("Guest");
   
   return (
      <>
         <Login username={username} updateUsername={setUsername}/>
         <ChatContainer username={username}/>
      </>
   );
};

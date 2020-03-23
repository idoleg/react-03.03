import React, {useState} from 'react';
import {Login} from "../Login/Login";
import {ChatContainer} from "../../containers/ChatContainer/ChatContainer";
import {ChatList} from "../ChatList/ChatList";

import "./Messenger.css"


export const Messenger = () => {
   const [username, setUsername] = useState("Guest");
   
   return (
      <>
         <Login username={username} updateUsername={setUsername}/>
         <div className="ChatsContainer">
            <ChatList/>
            <ChatContainer username={username}/>
         </div>
      </>
   );
};

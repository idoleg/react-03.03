import React from "react"
import MessageList from "./components/MessageList";


export default function App() {
   const MESSAGE = {
      name: "Guest",
      text: "Liked this image"
   };
   
   const INITIAL_STATE = [{
      name: "Dmitry",
      text: "Liked this image"
   }];
   
   const [messages, setMessages] = React.useState(INITIAL_STATE);
   
   const addMessage = () => {
      setMessages([...messages, MESSAGE]);
   };
   
   return (
      <div>
         <img src="https://picsum.photos/250" alt="Here was an image. Or wasn`t"/> <br/>
         <button onClick={addMessage} > {"<3"} </button>
         <MessageList messages={messages}/>
      </div>
   );
}

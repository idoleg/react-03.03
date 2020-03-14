import React, {useState} from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

const externalMessages = [
  { name: "Ivan", content: "Hello, world!" },
  { name: "Petr", content: "Hello, how are you?" },
  { name: "Ivan", content: "I'm well" },
];

export const App = () => {
  const [messages, setMessages] = useState(externalMessages);

  const setMessage = message => {
    setMessages([...messages, message]);
  };

  return (
    <div className='container'>
      <MessageList messages={messages} />
      <MessageForm setMessage={setMessage} />
    </div>
  );
};

export default App;
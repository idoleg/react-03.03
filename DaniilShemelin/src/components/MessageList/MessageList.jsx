import React, { useEffect, useState } from 'react';
import { Message } from './../Message/Message.jsx';
import PropTypes from 'prop-types';
import './MessageList.css';

export const MessageList = ({ messages }) => {
  // const [messages, setMessages] = useState(messagesProp);
  // const [isFirstTime, setIsFirstTime] = useState(false);

  // const handleClick = () => {
  //   setIsFirstTime(true);
  //   setMessages([...messages, { name: "Oleg", content: "I'm fine." }]);
  // }


  // useEffect(() => {
  //   const lastUserIdx = messages.length - 1;
  //   const lastUserName = messages[lastUserIdx].name;

  //   const robotName = "Mr. Robot";
  //   const robotMessage = `What's wrong with you, ${lastUserName}? I'm Robot, don't talk to me.`;

  //   if (messages[lastUserIdx].name !== robotName && isFirstTime) {
  //     setTimeout(() => {
  //       setMessages([...messages, { name: robotName, content: robotMessage }])
  //     }, 1000);
  //   }

  // }, [messages, isFirstTime]);

  return (
    <>
      <div className="message__wrapper">
        { messages.map((message, index) => <Message key={index} {...message} />) }
      </div>
      {/* <button className="message__btn" onClick={ handleClick }>Send Message</button> */}
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}

import React from "react";
import ReactDOM from "react-dom";
import './css/main.css';

const messages = [
  {name: "Ivan", content: "Hi!"},
  {name: "Oleg", content: "Hello!"},
  {name: "Ivan", content: "How are you?"},
];

const Message = ({ name, content }) => {
  return (
    <div className="message">
      <span className="message__name">{name}</span>
      <div className="message__content">{content}</div>
    </div>
  )
}

const MessageList = ({ hideBtn, messages }) => {
  return (
    <div className="container">
      <div className="message__wrapper">
        { messages.map((message, index) => <Message key={index} {...message} />) }
      </div>
      {hideBtn ? '' : <NewMessage />}
    </div>
  )
}

const NewMessage = () => {
  const clickOnBtn = () => {
    messages.push({name: 'Oleg', content: `I'm fine and you?`});

    ReactDOM.render(
      <MessageList hideBtn="true" messages={ messages } />,
      document.getElementById('app')
    );
  }

  return (
    <button className="message__btn" onClick={clickOnBtn}>Отправить новое сообщение</button>
  )
}

ReactDOM.render(
  <MessageList messages={ messages } />,
  document.getElementById('app')
);
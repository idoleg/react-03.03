import React from 'react';
import './Message.css';


export const Message = ({ name, content }) => {
  return (
    <div className="message">
      <span className="message__name">{ name }</span>
      <div className="message__content">{ content }</div>
    </div>
  )
}
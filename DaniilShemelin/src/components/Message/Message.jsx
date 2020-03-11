import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';


export const Message = ({ name, content }) => {
  return (
    <div className="message">
      <span className="message__name">{ name }</span>
      <div className="message__content">{ content }</div>
    </div>
  )
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

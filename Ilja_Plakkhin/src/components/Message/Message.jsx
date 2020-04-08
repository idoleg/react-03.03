import React from "react";
import PropTypes from 'prop-types';
import classname from 'classname';
import "./Message.css";

export const Message = ({ author, text }) => {
  const className = classname("Message", {'Message--robot': author === 'Robot'});
return <li className={className}><strong>{author}</strong>: {text}</li>}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textCapitalize } from '../common/textUtils';
import './Message.scss';

const normalMessageStyles = classNames('message');
const botMessageStyles = classNames('message', 'message_access_bot');

export const Message = ({ author, text, authorAccess }) => {
  return (
    <li className={authorAccess !== 'bot' ? normalMessageStyles : botMessageStyles}>
      <span className="message__author">{textCapitalize(author)}</span>
      <span className="message__text">{text}</span>
    </li>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

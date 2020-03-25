import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textCapitalize } from '../common/textUtils';
import './styles.scss';

const normalMessageStyles = classNames('message');
const botMessageStyles = classNames('message', 'message_access_bot');

export const Message = ({ author, text, authorAccess, messageId, handler, chatId }) => {
  return (
    <li
      className={authorAccess !== 'bot' ? normalMessageStyles : botMessageStyles}
      onDoubleClick={authorAccess !== 'bot' && messageId ? handler({messageId, chatId}) : null}
    >
      <span className="message__author">{textCapitalize(author)}</span>
      <span className="message__text">{text}</span>
    </li>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

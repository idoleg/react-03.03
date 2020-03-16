import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

export const Message = ({author, content, currentUser}) => {
    const name = author === currentUser ? 'Me': author;
    const className = classname('message', {'message_current-user': name === 'Me'});
    return (
        <li className={className}>
            <span className="message__author">{name}</span>
            <pre className="message__content">{content}</pre>
        </li>
    )
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    currentUser: PropTypes.string,
};

Message.defaultProps = {
    currentUser: 'Vladislav',
};

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

import './Message.css';

export const Message = ({name, content}) => {
    const className = classname("Message", {
        'Message--robot': name === 'Robot'
    });
    if (content != '') {
        return <li className={className}>
            <p className="nameMessage">{name}:</p>
            <p className="contentMessage"> {content} </p>
            </li>
    } else {
        return '';
    }
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
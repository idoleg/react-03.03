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
            <strong>{name}:</strong>
            {content}</li>
    } else {
        return '';
    }
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
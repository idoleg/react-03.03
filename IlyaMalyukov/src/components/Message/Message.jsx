import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import classname from 'classname';

import './Message.css';

export const Message = ({ name, content }) => {
    const className = classname("Message", { 'Message--robot': name === 'Robot' });
    return <li className={className} ><strong>{name}:</strong> {content}</li>
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
=======

export const Message = ({name, content}) => {
    return <li><strong>{name}:</strong> {content}</li>
>>>>>>> master
}
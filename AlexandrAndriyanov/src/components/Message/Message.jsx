import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import classname from 'classname';
export const Message = ({name, content}) => {
    const className = classname("Message", {'Message--chatbot': name == 'Chatbot'});
    return <li className={className}><div className="Triangle"></div><span><strong>{name}:</strong> {content}</span></li> 
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}
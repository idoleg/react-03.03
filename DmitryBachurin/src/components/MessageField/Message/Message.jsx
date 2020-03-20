import React from 'react';

const Message = ({name, content}) => {
    return <li><strong>{name}:</strong> {content}</li>
};

export { Message };
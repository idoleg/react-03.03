import React from 'react';
import classname from 'classname';

const Message = ({ name, content }) => {

    const className = classname({
        'message': true,
        'message__robot': name == 'Robot' ? true : false,
    })
    return <li className={className}><strong>{name}:</strong> {content}</li>
};

export { Message };
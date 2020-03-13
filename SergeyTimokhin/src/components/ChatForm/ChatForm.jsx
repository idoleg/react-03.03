import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useState('User');
    const [content, setContent] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        // onSendMessage({name, content});
        console.log(onSendMessage)
    }

    return (<form onSubmit={onSubmit}>
        <input name='name'
        value={name}
        onChange={({currentTarget: {value}}) => setName(value)} />
        <textarea name='content'
         placeholder='Your message'
         value={content}
         onChange={({currentTarget: {value}}) => setContent(value)} />
        <button>Send</button>
    </form>)
}


// ChatForm.propTypes = {
//     onSendMessage: PropTypes.func.isRequired,
// }

import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const ChatForm = ({onSendMessage}) => {
    const [name, setName] = useState('name')
    console.log(name)
    return  <form onSubmit={onSendMessage}>
                <input name="name" value=""/>
                <textarea name="content" value=""/>
                <button>Отправить</button>
            </form>
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
};
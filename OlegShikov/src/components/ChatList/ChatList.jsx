import React from 'react';
import { Link } from 'react-router-dom'
import {useInput} from '../../hooks/useInput'

export const ChatList = ({chats, createChat}) => {
    const [name, setName, setNameState] = useInput('');

    const handleAddChat = (event) => {
        event.preventDefault();
        createChat(name);
        setNameState('')
    }

    return (
        <ul>
            {chats.map(({id, name}) => <li key={id}><Link to={"/chats/" + id }>{name}</Link></li>)}
            <li>
                <form onSubmit={handleAddChat}>
                    <input value={name} onChange={setName} />
                    <button>Добавить чат</button>
                </form>
            </li>
        </ul>
    )
}
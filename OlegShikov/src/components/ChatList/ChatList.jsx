import React from 'react';
import { Link } from 'react-router-dom'
import {useInput} from '../../hooks/useInput'

export const ChatList = ({isLoading, error, chats, createChat}) => {
    const [name, setName, setNameState] = useInput('');

    const handleAddChat = (event) => {
        event.preventDefault();
        createChat(name);
        setNameState('')
    }
    if(isLoading) {
        return <div>Чаты загружаются</div>
    }
    if(error) {
        return null;
    }
    return (
        <ul>
            {chats.map(({id, name, fire}) => 
                <li key={id}>
                    <Link to={"/chats/" + id }>{name}</Link>{" "}
                    {fire && <strong>New messages</strong>}
                </li>)}
            <li>
                <form onSubmit={handleAddChat}>
                    <input value={name} onChange={setName} />
                    <button>Добавить чат</button>
                </form>
            </li>
        </ul>
    )
}
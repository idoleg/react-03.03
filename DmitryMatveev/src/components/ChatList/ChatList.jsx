import React from 'react';
import { Link } from 'react-router-dom';
import {useInput} from '../../hooks/useInput';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const ChatList = ({chats, addChat}) => {
    const [name, setName, setNameState] = useInput('');

    const handleAddChat = (event) => {
        event.preventDefault();
        addChat(name);
        setNameState('');
    }

    return (
        <ul>
            {chats.map(({id, name}) => <li key={id}>
                <Button className="chat__submit" type="submit" variant="contained" >
                     <Link to={"/chats/" + id } style={{color: 'black'}}>{name}</Link>
                </Button></li>)}
            <li>
                <form onSubmit={handleAddChat}>
                    <TextField 
                        variant="outlined"
                        label="чат"
                        name="chat" 
                        value={name} 
                        onChange={setName}/>
                    <Button 
                        className="chat__submit" 
                        type="submit"
                        variant="contained" > 
                        Добавить чат
                    </Button>
                </form>
            </li>
        </ul>
    )
}
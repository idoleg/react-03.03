import React from 'react';
import { Link } from 'react-router-dom';
import {useInput} from '../../hooks/useInput';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export const ChatList = ({chats, createChat}) => {
    const [name, setName, setNameState] = useInput('');

    const handleAddChat = (event) => {
        event.preventDefault();
        createChat(name);
        setNameState('');
    }



    return (
        <ul>
            {chats.map(({id, name}) => <li key={id}>
                <Grid container direction="row">
                <Button className="chat__submit" type="submit" variant="contained" >
                     <Link to={"/chats/" + id } style={{color: 'black'}}>{name}</Link>
                </Button>
                </Grid>
                </li>)}
            <li>
                <form onSubmit={handleAddChat}>
                    <TextField 
                        variant="outlined"
                        label="чат"
                        name="chat" 
                        value={name}
                        required 
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
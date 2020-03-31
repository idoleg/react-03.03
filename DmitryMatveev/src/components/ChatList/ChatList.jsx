import React from 'react';
import { Link } from 'react-router-dom';
import {useInput} from '../../hooks/useInput';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export const ChatList = ({isLoading, error, chats, createChat}) => {
    const [name, setName, setNameState] = useInput('');

    const handleAddChat = (event) => {
        event.preventDefault();
        createChat(name);
        setNameState('')
    }
    if(isLoading) {
        return (<Grid container direction="row" justify="center" alignItems="center"> 
                    <CircularProgress /> 
                    <div>Чаты загружаются</div>
                </Grid>)
    }
    if(error) {
        return null;
    }
    return (
        <ul>
            {chats.map(({id, name, fire}) => 
                <li key={id} type="none">               
                 <Grid container direction="row">
                    <Button className="chat__submit" type="submit" variant="contained" >
                        <Link to={"/chats/" + id }>{name}</Link>{" "}
                    </Button>
                    {fire && <strong>New messages</strong>}
                </Grid>
                </li>)}
            <li type="none">
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
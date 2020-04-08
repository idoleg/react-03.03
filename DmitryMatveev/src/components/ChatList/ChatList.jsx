import React from 'react';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const ChatList = () => {
        return (
            <Grid container direction="row" justify="centr" alignItems="centr">
                <Button className="chat__submit" type="submit" variant="contained" >
                <li><Link to="/chats/1" style={{color: 'black'}}>Chat 1</Link></li>
                </Button>
                <Button className="chat__submit" type="submit" variant="contained" >
                <li><Link to="/chats/2" style={{color: 'black'}}>Chat 2</Link></li> 
                </Button>
                <Button className="chat__submit" type="submit" variant="contained">
                <li><Link to="/chats/3" style={{color: 'black'}}>Chat 3</Link></li>
                </Button>
                <Button className="chat__submit" type="submit" variant="contained" >
                <li><Link to="/chats/4" style={{color: 'black'}}>Chat 4</Link></li>
                </Button>
                <Button className="chat__submit" type="submit" variant="contained">
                Add new chat
                </Button>
            </Grid>
        )
}


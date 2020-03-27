import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

import './ChatList.scss'


export const ChatList = ({ chats }) => {

    return (
        <div className='chatList'>
            <List component="nav" aria-label="contacts">
                {chats.map(item => (<ListItem button key={item.id} component={Link} to={`/chats/${item.id}`}><ListItemText primary={item.title} /></ListItem>))}

            </List>
        </div>
    )
};


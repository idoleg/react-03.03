import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

import './ChatList.scss'

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
export const ChatList = ({ chats }) => {

    return (
        <div className='chatList'>
            <List component="nav" aria-label="contacts">
                {chats.map(item => (<ListItemLink key={item.id} href={`chats/${item.id}`} button><ListItemText primary={item.title} /></ListItemLink>))}

            </List>
        </div>
    )
};


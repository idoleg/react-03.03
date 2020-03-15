import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './ChatList.scss'

const ChatList = ({ contacts }) => {

    return (
        <div className='chatList'>            
                <List component="nav" aria-label="contacts">
                    {contacts.map(item => (<ListItem button><ListItemText primary={item.name} /></ListItem>))}
                </List>            
        </div>
    )
};

export { ChatList };

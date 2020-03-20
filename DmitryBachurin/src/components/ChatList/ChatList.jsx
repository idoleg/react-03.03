import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './ChatList.scss'

export const ChatList = ({ chats }) => {

    return (
        <div className='chatList'>            
                <List component="nav" aria-label="contacts">
                    {chats.map(item => (<ListItem button><ListItemText primary={item.title} /></ListItem>))}
                </List>            
        </div>
    )
};

// export { ChatList };

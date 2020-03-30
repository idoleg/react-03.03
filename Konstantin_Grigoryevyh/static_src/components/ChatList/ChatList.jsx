import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useInput} from '../../hooks/useInput';

import './ChatList.css';

export const ChatList = () => {
        return <div className="chat__chatlist">
            <List component="nav">
                <ListItem button component={Link} to='/chats/1/'>
                    <ListItemText primary="Chat1" />
                </ListItem>
                <ListItem button component={Link} to='/chats/2/'>
                        <ListItemText primary="Chat2" />
                </ListItem>
                <ListItem button component={Link} to='/chats/3/'>
                        <ListItemText primary="Chat3" />
                </ListItem>
            </List>
        </div>
}
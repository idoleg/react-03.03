import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Chat';


export const ChatsList = ({chats})=> {
    return (
        <List component="nav">
            {chats.map(chat => (
                <ListItem button key={chat.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={chat.title} />
                </ListItem>
            ))}
        </List>
    )
};

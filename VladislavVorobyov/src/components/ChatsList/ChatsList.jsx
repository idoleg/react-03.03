import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Chat';
import {ChatListHeader} from "Components/ChatListHeader/ChatListHeader";

const useStyle = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateRows: '64px 1fr'
    },
    header: {
        position: "static",
        boxShadow: 'none'
    },
    itemFire: {
        background: '#aaaaaa',
    },
    list: {
        overflow: "auto",
        maxHeight: "100%",
    }

}));


export const ChatsList = ({chats, className="", handleAddNewChat})=> {
    const classes = useStyle();
    const [newChatName, setNewChatName] = useState('');
    const chatElements =chats.map(({id, title, fire, handleClick}) => {
        return (
        <ListItem button
                  className={fire?classes.itemFire:''}
                  onClick={handleClick}
                  key={id}
        >
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} />
        </ListItem>
    )});

    return (
        <div className={className}>
            <ChatListHeader
                className={classes.header}
                handleAddNewChat={handleAddNewChat}
            />
            <List component="nav" className={classes.list}>
                { chatElements }
            </List>

        </div>
    )
};

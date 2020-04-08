import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
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
    link: {
        textDecoration: 'none',
        '&:visited': {
            color: 'inherit',
        }
    },
    list: {
        overflow: "auto",
        maxHeight: "100%",
    }

}));


export const ChatsList = ({chats, className="", handleAddNewChat})=> {
    const classes = useStyle();
    const [newChatName, setNewChatName] = useState('');

    const chatElements =Object.entries(chats).map(([id, chat]) => (
        <Link className={classes.link} to={`/chats/${id}`} key={id}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={chat.title} />
            </ListItem>
        </Link>
    ));

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

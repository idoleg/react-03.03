import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Chat';
import {ChatListHeader} from "Components/ChatListHeader/ChatListHeader";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


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
    },
    loading: {
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    errorLoad: {
        display: "flex",
        height: "100%",
        // alignItems: "center",
        justifyContent: "center",
        color: "red",
    },
    loadingImg: {
        width: "40px",
        height: "40px"
    }
}));


export const ChatsList = ({chats, loading, hasError, errorMessage, className="", handleAddNewChat})=> {
    const classes = useStyle();
    const [newChatName, setNewChatName] = useState('');
    if (loading) {
        return (
            <div className={className}>
                <ChatListHeader
                    className={classes.header}
                    handleAddNewChat={handleAddNewChat}

                />
                <List component="nav" className={classes.loading}>
                    <img className={classes.loadingImg} src="/img/loading.gif" />
                </List>
            </div>
        )
    }
    if (hasError) {
        return (
            <div className={className}>
                <ChatListHeader
                    className={classes.header}
                    handleAddNewChat={handleAddNewChat}

                />
                <List component="nav" className={classes.errorLoad}>
                    {errorMessage}
                </List>
            </div>
        )
    }
    const chatElements =chats.map(({id, title, fire, handleClick, handleRemove}) => {
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
            <ListItemSecondaryAction>
                <IconButton onClick={handleRemove} edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
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

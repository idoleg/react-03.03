import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


import './ChatListItem.css';


export const ChatListItem = ({chatLink, chatAvatar, chatTitle, messageSender, lastMessage}) => {
    return (
        <>
        <ListItem alignItems="flex-start"><Link className="ChatListItem" to={chatLink}>
            <ListItemAvatar>
                 <Avatar alt="Remy Sharp" src={chatAvatar} />
             </ListItemAvatar>
             <ListItemText primary={chatTitle}
                secondary={
                <React.Fragment>
                <Typography component="span" variant="body1" color="textPrimary">
                    {messageSender}:
                </Typography>
                { lastMessage }
                </React.Fragment>
            }/></Link>
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
    )
}

import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        height: '100%',
        maxHeight: '100%',
        gridTemplateRows: '1fr 72px',
    },
}));


export const ChatsList = ({chats})=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav">
                {Object.entries(chats).map(([id, chat]) => (
                    <Link to={`/chats/${id}`}>
                        <ListItem button key={id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chat.title} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <List component="div">
                <Link to={'/profile/'}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <SettingsIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={'PROFILE'} />
                    </ListItem>
                </Link>
            </List>

        </div>
    )
};

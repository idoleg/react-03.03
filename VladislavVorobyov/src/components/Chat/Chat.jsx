import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {MessageList, messageProps} from 'Components/MessageList/MessageList';
import {MessageInput} from 'Components/MessageInput/MessageInput';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateRows: '1fr auto',
        height: '100%',
        maxHeight: '100%',
    },
    toolbar: theme.mixins.toolbar,
}));


export const Chat = ({messages, currentUser, handleNewMessage}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MessageList messages={messages} currentUser={currentUser}/>
            <MessageInput handleNewMessage={handleNewMessage}/>
        </div>
    )
};

export const chatProps = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(messageProps).isRequired,
});

Chat.propTypes = {
    chat: chatProps,
    handleNewMessage: PropTypes.func.isRequired,
};
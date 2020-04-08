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
        gridTemplateRows: '64px 1fr auto',
        height: '100%',
        maxHeight: '100%',
    },
    chatTitle: {
        position: 'static',
        boxShadow: "none",
    },
}));


export const Chat = ({className="", messages, chatTitle, handleNewMessage}) => {
    const classes = useStyles();
    if (!chatTitle) {
        return <div className={className}>
            <h3>Запрашиваемый чат не существует</h3>
        </div> ;
    }
    return (
        <div className={`${classes.root} ${className}`}>
            <AppBar className={classes.chatTitle}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {chatTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
            <MessageList messages={messages}/>
            <MessageInput handleNewMessage={handleNewMessage}/>
        </div>
    )
};

export const chatProps = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(messageProps).isRequired,
});

// Chat.propTypes = {
//     chat: chatProps,
//     handleNewMessage: PropTypes.func.isRequired,
// };
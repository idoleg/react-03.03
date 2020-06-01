import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {MessageList, messageProps} from 'Components/MessageList/MessageList';
import {MessageInput} from 'Components/MessageInput/MessageInput';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";


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
    loadingImg: {
        width: "40px",
        height: "40px"
    }
}));


export const Chat = ({messages, chatTitle, handleNewMessage, className="", loading=false, errorMessage=''}) => {
    const classes = useStyles();
    if (loading) {
        return (
            <div className={`${classes.root} ${className}`}>
                <img className={classes.loadingImg} src="/img/loading.gif" />
            </div>
        )
    }
    if (errorMessage){
        return (
            <div className={`${classes.root} ${className}`}>
                {errorMessage}
            </div>
        )
    }
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
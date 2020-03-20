import React from 'react';
import Link from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Profile} from 'Components/Profile/Profile';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import {ChatsList} from 'Components/ChatsList/ChatsList';
import {Chat} from "Components/Chat/Chat";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        height: '100vh',
        maxHeight: '100vh',
        gridTemplateColumns: '240px 1fr',
        gridTemplateRows: '64px 1fr',
        gridTemplateAreas: "'chatList chatTitle ' "+
                            "'chatList chat'",
    },
    chatList: {
        gridArea: 'chatList',
    },

    chatListPaper: {
        width: 240,
    },

    chatTitle: {
        gridArea: 'chatTitle',
        position: 'static',
    },

    chat: {
        gridArea: 'chat',
        overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
}));


export const Messenger = ({showProfile, chats, currentChatId,
                              config ,handleNewMessage, handleUpdateConfig}) => {
    const classes = useStyles();
    const currentChat = chats[currentChatId];
    let profileElement;
    if (showProfile) {
        profileElement = <Profile config={config} handleConfigUpdate={handleUpdateConfig} />
    }
    return (
        <>
            {profileElement}
            <div className={classes.root}>
                <CssBaseline />
                <AppBar className={classes.chatTitle}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            {currentChat.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.chatList}
                    variant="permanent"
                    classes={{
                        paper: classes.chatListPaper,
                    }}
                >
                    <ChatsList chats={chats} />
                </Drawer>
                <div className={classes.chat}>
                    <Chat
                        messages={currentChat.messages}
                        currentUser={config.userName}
                        handleNewMessage={handleNewMessage}
                    />
                </div>
            </div>
        </>
    )

};

Messenger.propTypes = {
    chats: PropTypes.shape(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        messages: PropTypes.array.isRequired,
    })).isRequired,
    config: PropTypes.shape({
        userName: PropTypes.string.isRequired,
    }).isRequired,
};

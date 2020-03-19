import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import {ChatsList} from 'Components/ChatsList/ChatsList';
import {ChatContainer} from "Containers/ChatContainer";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
    },

    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    content: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
}));


export const Messenger = ({chats, config}) => {
    const classes = useStyles();
    const currentChat = chats[0];
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <ChatsList chats={chats} />
            </Drawer>
            <div className={classes.content}>
                <ChatContainer chat={chats[0]} author={config.userName}/>
            </div>
        </div>
    )

};

Messenger.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        messages: PropTypes.array.isRequired,
    })).isRequired,
    config: PropTypes.shape({
        userName: PropTypes.string.isRequired,
    }).isRequired,
};

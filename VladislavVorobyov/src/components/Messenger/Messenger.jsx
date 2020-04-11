import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChatsList from 'Containers/ChatsListContainer';
import Settings from "Containers/ProfileContainer";
import ChatContainer from 'Containers/ChatContainer';
import {Route, Switch} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        height: '100vh',
        maxHeight: '100vh',
        gridTemplateColumns: '240px 1fr',
        gridTemplateRows: '1fr 72px',
        gridTemplateAreas: "'chatList chat' "+
                           "'settings chat'",
    },
    chatList: {
        gridArea: 'chatList',
        padding: 0,
        background: "#ddd",
    },

    chatListPaper: {
        width: 240,
    },

    settings: {
        gridArea: 'settings',
        background: "#ddd",
    },
    chatTitle: {
        gridArea: 'chatTitle',
        position: 'static',
        boxShadow: "none",
    },

    chat: {
        gridArea: 'chat',
        overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
}));


export const Messenger = (props) => {
    const {match:{path}} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <ChatsList path={path} className={ classes.chatList } />
            <Settings className={ classes.settings } />
            <Switch>
                <Route path={path} exact>Выберите чат</Route>
                <Route path={`${path}/:id`}>
                    <ChatContainer path={path} className={classes.chat} />
                </Route>
            </Switch>

        </div>
    )

};

// Messenger.propTypes = {
//     chats: PropTypes.shape(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         messages: PropTypes.array.isRequired,
//     })).isRequired,
//     config: PropTypes.shape({
//         userName: PropTypes.string.isRequired,
//     }).isRequired,
// };

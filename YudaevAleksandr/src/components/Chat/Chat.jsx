import React from "react";
import PropTypes from "prop-types";
import {MessageField} from "../MessageField/MessageField";
import {Message} from "../Message/Message";
import {makeStyles} from "@material-ui/core/styles";
import {ChatForm} from "../ChatForm/ChatForm"

export const Chat = ({messages, active, onSendMessage, onKeyDown}) => {
    const useStyles = makeStyles(theme => ({
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
        input: {
            width: '100%',
        },
    }));
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <MessageField messages={messages} />
            <ChatForm
                onSendMessage={onSendMessage}
                active = {active}
                onKeyDown = {onKeyDown}
            />
        </main>
    )
};

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
};
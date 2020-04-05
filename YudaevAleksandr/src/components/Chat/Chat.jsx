import React from "react";
import PropTypes from "prop-types";
import {MessageField} from "../MessageField/MessageField";
import {Message} from "../Message/Message";
import {makeStyles} from "@material-ui/core/styles";
import {ChatForm} from "../ChatForm/ChatForm"

export const Chat = ({messages, onSendMessage, onKeyDown}) => {
    const useStyles = makeStyles(theme => ({
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
            paddingLeft: 200,
        },
        input: {
            width: '100%',
        },
        messageField: {
            paddingLeft: 180,
        },
    }));
    const classes = useStyles();

    if (messages) {
        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {messages.length ? <MessageField messages={messages} /> : "Нет сообщений"}
                <ChatForm
                    onSendMessage={onSendMessage}
                    onKeyDown = {onKeyDown}
                />
            </main>
        )
    } else {
        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                Чат не существует
            </main>
        )
    }
};

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
};
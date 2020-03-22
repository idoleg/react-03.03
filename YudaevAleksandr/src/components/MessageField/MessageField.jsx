import React from "react";
import {Message} from "../Message/Message";
import PropTypes from "prop-types";


export const MessageField = ({messages}) => {
    let messageList = messages.map((data, i) => {
        return (
            <Message { ...data } key={i}/>
        )
    });

    return messageList;
};

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
};
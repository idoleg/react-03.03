import React, { Component } from "react";
import { Message } from "../Message/Message";

export const MessageField = ({messages}) => {
    let messageList = messages.map((data, i) => {
        return (
            <Message { ...data } i={i}/>
        )
    });
    return (
        <>
            {messageList}
        </>
    );
};
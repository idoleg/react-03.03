import React from "react";
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import {useRef, useEffect} from "react";
import './MessageList.css';

export const MessageList = ({messages}) => {

    const scroll= useRef();

    useEffect(()=>{
        scroll.current.scrollTop =scroll.current.scrollHeight;
    })

    return (
        <ul className="MessageList" ref={scroll} >
            {messages.map((item, index) => <Message {...item} key={index}/>)}
        </ul>

    );
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}
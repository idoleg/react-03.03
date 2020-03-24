import React from 'react';
import {Header} from '../Header/index.jsx';
import {Footer} from '../Footer/index.jsx';
import {MessageField} from '../MessageField/MessageField.jsx';
import '../../styles/styles.css';
import ChatList from "../ChatList/ChatList";

export const Layout = () => {
    return (
        <>
            <Header />
            <div className="chat">
                <ChatList />
                <MessageField />
            </div>
            <Footer />
        </>
    )
}
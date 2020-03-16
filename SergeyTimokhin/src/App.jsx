import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {Header} from './components/Header/Header';
import {ChatList} from './components/ChatList/ChatList';


export const App = () => {
    return (<div style={ { display: 'flex', flexWrap: 'wrap' } }>
        <Header />
        <ChatList />
        <ChatContainer />
    </div>
    )
}

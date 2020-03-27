import React, {Component} from 'react';
// import ChatContainer from './containers/ChatContainer'
// import ChatListContainer from './containers/ChatListContainer'
import {Header} from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router'
import './css/style.css'
import {initStore} from './store/index'
import {Provider} from 'react-redux'
import {initChats} from './store/chatActions'

{/* <Header/>
                <ChatListContainer />
                <ChatContainer />  */}

//import {sendMessage} from './store/chatActions'
//store.dispatch(sendMessage('test','message'))
const store = initStore()
store.dispatch(initChats())

console.log(store.getState())

export const App = () => {
    return ( 
        <div className="AppContainer">
            <Provider store={store}>
                <BrowserRouter>
                    
                    {/* <ChatListContainer /> */}
                    {/* <ChatContainer module="ChatList" /> */}
                    <Router/>
                </BrowserRouter>
            </Provider>
        </div>
    )
}
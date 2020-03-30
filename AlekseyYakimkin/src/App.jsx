import React, {Component,useEffect} from 'react';
// import ChatContainer from './containers/ChatContainer'
// import ChatListContainer from './containers/ChatListContainer'
import {Header} from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router'
import './css/style.css'
import {initStore, history} from './store/index'
import {Provider} from 'react-redux'
import {fetchChats} from './store/chatOperations'
import {ConnectedRouter} from 'connected-react-router'

{/* <Header/>
                <ChatListContainer />
                <ChatContainer />  */}

//import {sendMessage} from './store/chatActions'
//store.dispatch(sendMessage('test','message'))
const store = initStore()
store.dispatch(fetchChats())

console.log(store.getState())

export const App = () => {
    return ( 
        <div className="AppContainer">
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    
                    {/* <ChatListContainer /> */}
                    {/* <ChatContainer module="ChatList" /> */}
                    <Router/>
                </ConnectedRouter>
            </Provider>
        </div>
    )
}
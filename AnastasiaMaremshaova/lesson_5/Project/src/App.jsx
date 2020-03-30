import React, {Component} from 'react';
import ChatContainer from './containers/ChatContainer';
import {Header} from './components/Header/Header'
import ChatListContainer from './containers/ChatListContainer'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import { ChatList } from './components/ChatList/ChatList';
import {initStore} from './store/index'
import {Provider} from 'react-redux'
import {initChats} from './store/chatActions'
import Profile from './components/Profile/Profile'
import {IndexPage} from './components/IndexPage/IndexPage'
import './App.css'


const store = initStore(); 
store.dispatch(initChats()); 
 

export const ROBOT = 'Robot';
export class App extends Component {
   render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="MessageField">
                           <ChatListContainer/>
                            <Switch>
                                <Route path= "/chats/:id" component={ChatContainer}></Route>
                                <Route path= "/" exact component={IndexPage}></Route>
                                <Route path="/profile/" exact component={Profile}></Route>
                            </Switch>                 
                        </div>
                    </div> 
                </BrowserRouter>
            </Provider>
        );
   }
}
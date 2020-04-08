import React, {Component} from 'react';
import ChatContainer from './containers/ChatContainer';
import {Header} from './components/Header/Header'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {initStore,  history} from './store/index'
import {Provider} from 'react-redux'
import {initChats} from './store/chatActions'
import {IndexPage} from './components/IndexPage/IndexPage'
import {ConnectedRouter} from 'connected-react-router';
import {Navigation} from './components/Navigation/Navigation'
import './App.css'

const store = initStore();
store.dispatch(initChats()); 


export const ROBOT = 'Robot';
export class App extends Component {
   render(){
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                        <Header/>
                        <div className="MessageField">
                            <Navigation/>

                           <Switch>
                            <Route path= "/" exact component={IndexPage}></Route>
                            <Route path= "/chats/:id" exact component={ChatContainer}></Route>
                            </Switch>                 
                        </div>
                </ConnectedRouter>
            </Provider>
        );
   }
}
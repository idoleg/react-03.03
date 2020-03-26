import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {Header} from './components/Header/Header'
import {ChatListContainer} from './containers/ChatListContainer'


import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import { Chat } from './components/Chat/Chat';

import './App.css'
export const ROBOT = 'Robot';
export class App extends Component {
   render(){
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <ChatListContainer/>
            </div> 
        </BrowserRouter>
        
    );
   }
}
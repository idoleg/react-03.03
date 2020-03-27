import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ChatContainer from '../containers/ChatContainer';
import {Layout} from './Layout'


export default class Router extends React.Component {
   render() {
       return (
           <Switch>
               <Route exact path='/'>It's root page</Route>
               <Route path='/chats' exact render={ (props) =>  <Layout { ...props } /> }></Route>
               <Route path='/chats/:id' exact render={ (props) =>  <Layout { ...props } /> }></Route>
               <Route path='/about'>It's about page</Route>
               <Route path='/contacts'>It's contacts page</Route>
               <Route path='/profile'>It's user's profile</Route>
               <Route path='/'>404 Not found</Route>
               {/* <Route exact path='/' component={ Layout } />
               <Route exact path='/chat/1/' render={ () =>
                   <Layout chatId={ 1 } /> } />
               <Route exact path='/chat/2/' render={ () =>
                   <Layout chatId={ 2 } /> } />
               <Route exact path='/chat/3/' render={ () =>
                   <Layout chatId={ 3 } /> } /> */}
           </Switch>
       )
   }
}

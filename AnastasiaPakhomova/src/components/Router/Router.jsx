import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Profile from '../Profile/Profile'
import Header from '../Header/Header'
import ChatContainer from '../containers/ChatContainer'
import {initStore} from '../../store'
import {Provider} from 'react-redux'
import {initChats, initProfile} from '../../store/chatActions'


const store = initStore ()
store.dispatch(initChats())
store.dispatch(initProfile())

console.log(store.getState())

export const Router = () => {
    return (
	<Provider store={store}>
      <BrowserRouter>
       	<Header/>
      	<Switch>
        	<Route path="/" exact>It's index page</Route>
        	<Route path="/chats" exact component={ChatContainer} />
        	<Route path="/chats/:id" exact component={ChatContainer} />
        	<Route path="/profile" exact component={Profile} />
        	<Route path="/">It's 404 page. Not found.</Route>
      	</Switch>
      </BrowserRouter>
	</Provider>
    )
}



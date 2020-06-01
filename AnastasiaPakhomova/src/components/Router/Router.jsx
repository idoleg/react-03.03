import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Profile from '../Profile/Profile'
import Header from '../Header/Header'
import ChatContainer from '../containers/ChatContainer'
import {initStore, history} from '../../store'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {PersistGate} from 'redux-persist/integration/react'
import {fetchChats} from '../../store/chatOperations'
import {fetchProfile} from '../../store/profileOperations'
import ChatListContainer from '../containers/ChatListContainer'
import './Router.css'

const {store, persistor} = initStore()
store.dispatch(fetchChats())
store.dispatch(fetchProfile())

console.log(store.getState())

export const Router = () => {

    return (
	<Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
       	<Header/>

      	<Switch>
        	<Route path="/" exact>It's index page</Route>

        	<Route path="/chats">
           		<div className="chat-field">
            	<ChatListContainer />
            	<Switch>
            		<Route path="/chats/:id" exact component={ChatContainer} />
            	</Switch>
            	</div>
            </Route>


        	<Route path="/profile" exact component={Profile} />
        	<Route path="/">It's 404 page. Not found.</Route>
      	</Switch>
      </ConnectedRouter>
      </PersistGate>
	</Provider>
    )
}



import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Profile} from '../Profile/Profile.jsx'
import {Header} from '../Header/Header'
import {ChatContainer} from '../containers/ChatContainer'


export const Router = () => {
    return (

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

    )
}



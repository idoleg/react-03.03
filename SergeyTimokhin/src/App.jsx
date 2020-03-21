import React, {Component} from 'react';
import {ChatContainer} from './containers/ChatContainer';
import {Header} from './components/Header/Header';
import {ChatList} from './components/ChatList/ChatList';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


export const App = () => {
    return (<div style={ { display: 'flex', flexWrap: 'wrap' } }>
    <Header />
      <BrowserRouter>
        <ChatList/>
        <Switch>
            <Route path="/" exact>It's Index Page</Route>
            <Route path="/chats/" exact component={ChatContainer} />
            <Route path="/chats/:id" exact component={ChatContainer} />
            <Route path="/about">It's about Page</Route>
            <Route path="/contacts">It's contacts Page</Route>
            <Route path="/">It's 404 Page. Not found</Route>
        </Switch>
      </BrowserRouter>
    </div>
    )
}

// export const App = () => {
//     return (<div style={ { display: 'flex', flexWrap: 'wrap' } }>
//         <Header />
//         <ChatList />
//         <ChatContainer />
//     </div>
//     )
// }

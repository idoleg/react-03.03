import React from 'react';
import ChatContainer from './containers/ChatContainer';
import {Header} from './components/Header/Header';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {initStore, history} from './store';
import {Provider} from 'react-redux';
import {fetchChats} from './store/chatOperations';
import ChatListContainer from './containers/ChatListContainer';
import { ConnectedRouter } from 'connected-react-router';



const store = initStore();
store.dispatch(fetchChats())



export const App = () => {
    return (<div style={ { display: 'flex', flexWrap: 'wrap' } }>
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <Header/>
          <Switch>
              <Route path="/" exact>It's index page</Route>
              <Route path="/profile" exact component={Profile} />
              <Route path="/chats">
                  <ChatListContainer/>
                  <Switch>
                      <Route path="/chats" exact component={ChatContainer} />
                      <Route path="/chats/:id" exact component={ChatContainer} />
                  </Switch>
              </Route>
              <Route path="/about">It's about page</Route>
              <Route path="/contacts">It's contacts page</Route>
              <Route path="/">It's 404 page. Not found.</Route>
          </Switch>
        </ConnectedRouter>
      </Provider>
    </div>
    )
}

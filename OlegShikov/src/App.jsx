import React, {useEffect} from 'react';
import ChatContainer from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {initStore, history} from './store'
import {Provider} from 'react-redux'
import {fetchChats} from './store/chatOperations'
import ChatListContainer from './containers/ChatListContainer';
import {ConnectedRouter} from 'connected-react-router';
// StaticRouter
// MemoryRouter
// HashRouter www.test.com/#about
// BrowserRouter www.test.com/index

const store = initStore();
store.dispatch(fetchChats());

export const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact>It's index page</Route>
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
    )
}

// import {CounterFunc} from './Counter';

// export class App extends Component {

//     state = {
//         isShowCounter: true,
//         counter: 1
//     }

//     handleShowCounter = () => {
//         this.setState((state) => ({isShowCounter: !state.isShowCounter}))
//     }
    
//     handleCounter = (value) => {
//         this.setState((state) => ({counter: state.counter + value}))
//     }

//     render(){
//         const {isShowCounter, counter} = this.state;
//         return (
//             <>  
//                 {isShowCounter && <CounterFunc counter={counter} handleCounter={this.handleCounter} />}
//                 <p><button onClick={this.handleShowCounter} >
//                         {isShowCounter ? 'Hide counter' : 'Show counter'}
//                 </button></p>
//             </>
//         )
//     }
// }
import React, {Component} from 'react';
import ChatContainer from './containers/ChatContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ChatList} from './components/ChatList/ChatList'
import {initStore} from './store'
import {Provider} from 'react-redux'
import {initChats} from './store/chatActions'

const store = initStore();
store.dispatch(initChats());

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>It's index page</Route>
                    <Route path="/chats"> 
                        <ChatList/>
                        <Switch>
                            <Route path="/chats" exact component={ChatContainer} />
                            <Route path="/chats/:id" exact component={ChatContainer} />
                        </Switch>
                    </Route>
                    <Route path="/about">It's about page</Route>
                    <Route path="/contacts">It's contacts page</Route>
                    <Route path="/">It's 404 page. Not found.</Route>
                </Switch>
            </BrowserRouter>
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
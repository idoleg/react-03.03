import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import chatReducer from './chatReducer'
import profileReducer from './profileReducer'
import botMiddleware from './botMiddleware'
import chatMiddleware from './chatMiddleware'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import {connectRouter} from 'connected-react-router'
import ReduxThunk from 'redux-thunk'


export const history = createBrowserHistory()

const reducer = combineReducers({
	router: connectRouter(history),
    chats: chatReducer,
	user: profileReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function initStore (preloadedState = {}) {
	return createStore(
		reducer,
		preloadedState,
		composeEnhancers(
        	applyMiddleware(
				ReduxThunk,
				routerMiddleware(history),
				chatMiddleware,
				botMiddleware
			)
       ),
	)
}

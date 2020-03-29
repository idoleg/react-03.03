import {createStore, combineReducers} from 'redux'
import chatReducer from './chatReducer'
import profileReducer from './profileReducer'

const reducer = combineReducers({
    chats: chatReducer,
	user: profileReducer
})

export function initStore (preloadedState = {}) {
	return createStore(reducer, preloadedState)
}

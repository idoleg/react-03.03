import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import chatReducer from './chatReducer'
import profileReducer from './profileReducer'
import botMiddleware from './botMiddleware'
import chatMiddleware from './chatMiddleware'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import {connectRouter} from 'connected-react-router'
import ReduxThunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { apiMiddleware } from 'redux-api-middleware'

const persistConfig = {
   key: 'geekmessanger',
   storage,
   stateReconciler: autoMergeLevel2,
   whitelist: ['chatReducer'],
}

export const history = createBrowserHistory()

const reducer = combineReducers({
	router: connectRouter(history),
    chats: chatReducer,
	user: profileReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function initStore (preloadedState = {}) {
	const store = createStore(
		persistReducer(persistConfig, reducer),
		preloadedState,
		composeEnhancers(
        	applyMiddleware(
				ReduxThunk,
				apiMiddleware,
				routerMiddleware(history),
				chatMiddleware,
				botMiddleware
			)
       ),
	)

	const persistor = persistStore(store)
    return { store, persistor }
}


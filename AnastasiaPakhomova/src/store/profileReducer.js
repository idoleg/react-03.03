import {handleActions} from 'redux-actions'
import {initProfile, loadingProfile, failedLoadedProfile} from './chatActions'
import update from 'react-addons-update'

const initialState = {
	user: {},
	isLoading: false,
    error: null,
}

export default handleActions({
	[loadingProfile]: (store, action) => {
        return {
			...store,
			isLoading: true,
		}
    },

	[failedLoadedProfile]: (store, action) => {
        return {
            ...store,
            isLoading: false,
            error: action.payload.error,
        }
    },

    [initProfile]: (store, action) => {
        return {
			...store,
            isLoading: false,
			user: action.payload
		}
    },
}, initialState)

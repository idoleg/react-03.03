import {handleActions} from 'redux-actions'
import { initProfile} from './chatActions'
import update from 'react-addons-update'

const initialState = {
	user: {}
}

export default handleActions({
	[initProfile]: (store, action) => {

		return {
			user:{
    			name: 'Moisha',
    			surname: 'Liberman',
    			age: 67
			}
		}
	}
}, initialState)

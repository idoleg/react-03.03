import {initProfile, loadingProfile, failedLoadedProfile} from './chatActions'
import { createAction } from 'redux-api-middleware'


export const fetchProfile = () => createAction({
    endpoint: '/api/user.json',
    method: 'GET',
    types: [loadingProfile.toString(), initProfile.toString(), failedLoadedProfile()]
})


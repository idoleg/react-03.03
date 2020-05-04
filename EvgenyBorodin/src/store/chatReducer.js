import { handleActions } from 'redux-actions';
import { loadingChats, failedLoadedChats, initChats, sendMessage, addChat, renameChat, updateProfile, selectChat, deselectChat, fireChat, unfireChat, deleteChat } from './chatActions.js';

const initialState = {
    chats: {},
    isLoading: false,
    error: null,
    profile: {},
};

export default handleActions({
    [loadingChats]: (store, action) => {
        return {
            ...store,
            isLoading: true,
        }
    },
    [failedLoadedChats]: (store, action) => {
        return {
            ...store,
            isLoading: false,
            error: action.payload.error,
        }
    },
    [initChats]: (store, action) => {
        return {
            ...store,
            isLoading: false,
            ...action.payload,
        }
    },
    [sendMessage]: (store, action) => {
        const {id, user, text} = action.payload;
        // console.log(store)
          return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    messages: [
                        ...store.chats[id].messages,
                        {user, text},
                    ]
                }
            }
        };
    },
    [updateProfile]: (store, action) => {
        const {profile} = action.payload;
        return {
            ...store,
            profile,
        }
    },
    [addChat]: (store, action) => {
        const newId = Object.keys(store.chats).length + 1
        const {name} = action.payload;
        return {
            ...store,
            chats: {
                ...store.chats,
                [newId]: { 
                    name,
                    fire: false,
                    selected: false,
                    messages: [],
                }
            }
        };
    },
    [renameChat]: (store, action) => {
        const {id, name} = action.payload;
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: { 
                    name,
                }
            }
        };
    },
    [selectChat]: (store, action) => {
        const {id} = action.payload;
        const [prevId] = Object.keys(store.chats).filter(item => store.chats[item].selected)
        if (prevId) {
            return {
                ...store,
                chats: {
                    ...store.chats,
                    [id]: {
                        ...store.chats[id],
                        selected: true,
                    },
                    [prevId]: {
                        ...store.chats[prevId],
                        selected: false,
                    }
                }
            }
        } else {
            return {
                ...store,
                chats: {
                    ...store.chats,
                    [id]: {
                        ...store.chats[id],
                        selected: true,
                    },
                }
            }
        }
    },
    [deselectChat]: (store, action) => {
        const find = Object.keys(store.chats).find(elem => store.chats[elem].selected)
        return {
            ...store,
            chats: {
                ...store.chats,
                [find]: {
                    ...store.chats[find],
                    selected: false,
                }        
            }
        };
    },
    [fireChat]: (store, action) => {
        const {id} = action.payload;
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    fire: true,
                }
            }
        }
    },
    [unfireChat]: (store, action) => {
        const {id} = action.payload;
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    fire: false,
                }
            }
        }
    },
    [deleteChat]: (store, action) => {
        const {id} = action.payload;
        const newStore = {...store, chats: {}}
        Object.keys(store.chats).forEach(item => {
            console.log(item)
            if (Number(item) < Number(id)) newStore.chats[item]={...store.chats[item]}
            else if (Number(item) > Number(id)) newStore.chats[Number(item) - 1]={...store.chats[item]}
        })

        return {
            ...newStore,
        };
    },
}, initialState)
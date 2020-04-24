import {handleActions} from 'redux-actions';
import {loadingChats, failedLoadedChats,initChats, addChat, saveChangesProfileData,
     sendMessage, deleteChat, saveNameChat, fire, unfire, setFill, deleteFill, savePrevId,
    openEditNameChat, exitEditNameChat} from './chatActions';

const initialState = {
    chats: {},
    isLoading: false,
    error: null,
};


export default handleActions ({
    
    [loadingChats]: (store, action) => {
        return {
            ...store,
            isLoading: true,
            
            
        };
    },
    [failedLoadedChats]: (store, action) => {
        return {
            ...store,
            isLoading: false,
            error: action.payload.error,
            
        };
    },
    [initChats]: (store, action) => {
        console.log(action); 
        return {
            ...store,
            isLoading: false,
            chats: action.payload.chats,
            profileData: action.payload.profileData,
            countChats: action.payload.countChats,
            prevId: null,
            openedEditNameChat: false
        };
    },

    [addChat]: (store, action) => {
        
        const {id, name, botId}= action.payload;

        return {...store, 
            chats: {...store.chats,
            [id] : {
                name,
                botId,
                fire: false,
                fill: false,
                messages: [
                      ],
            }
        }
        , countChats : id}
    
    },

    [saveChangesProfileData] : (store, action) => {
        const nameSave = action.payload.name; 
        return {
            ...store, profileData: {name: nameSave}}
        },


    [sendMessage] : (store, action) =>{
        const {id, name, content} = action.payload;

        console.log(store);
        return {
            ...store, chats: {...store.chats,
            [id]: {...store.chats[id], 
                messages: [
                    ...store.chats[id].messages,
                    {name, content},
                ]
            } 
        }}},

    [deleteChat] : (store, action) =>{
        const {id} = action.payload; 
        console.log(action); 

        return {...store, 
            chats:{...Object.fromEntries
                     (Object.entries(store.chats).filter(el=> el[0] != id))
            }
        }
    },

    [saveNameChat] :  (store, action) => {
        const {id, nameChat} = action.payload;
        return {...store, 
            openEditNameChat: false,  
            chats: {...store.chats, [id]: {...store.chats[id], name: nameChat, messages: [...store.chats[id].messages]}}
        }
    },

    [fire]: (store, action) => {
        const {id} = action.payload;
        console.log(id); 
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    fire: true,
                    
                }
            }
        };
    },

    [unfire]: (store, action) => {
        const {id} = action.payload;
        console.log(id); 
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    fire: false,
                }
            }
        };
    },
    [setFill]: (store, action) => {
        const {id} = action.payload; 
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    fill: true,
                    
                }
            }
        };
    },

    [deleteFill]: (store, action) => {
        const {id} = action.payload; 
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    fill: false,
                }
            }
        };
    },

    [savePrevId] : (store, action) =>{
        const {id} = action.payload; 
        return {
            ...store,
            prevId: id
        };
    },

    [openEditNameChat] : (store, action) =>{
        return {
            ...store,
            openedEditNameChat: true
        };
    },

    [exitEditNameChat] : (store, action) =>{
        return {
            ...store,
            openedEditNameChat: false
        };
    }




}, initialState)
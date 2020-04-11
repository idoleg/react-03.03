import {handleActions} from 'redux-actions'
import {initChats,sendMessage,addNewChat,deleteChat} from './chatActions'

const initialState = {
    chats: {}
}

export default handleActions({
    [initChats]: (store, actions) => {
        console.log('initChats', initChats)
        return {
            chats: {
                1:{
                    url: "/chats/1",
                    name: "Chat 1",
                    img: "https://via.placeholder.com/40",
                    messages:[
                        { name: "Ivan", content: "Hello, world!" },
                        { name: "Petr", content: "Helo, how are you?" },
                        { name: "Ivan", content: "I'm well" },
                    ],
                },
                2:{
                    url: "/chats/2",
                    name: "Chat 2",
                    img: "https://via.placeholder.com/40",
                    messages:[
                        { name: "Alex", content: "Hello, world!" },
                        { name: "Jon", content: "Helo" },
                        { name: "Alex", content: "Bye!" },
                    ],
                },
                3:{
                    url: "/chats/3",
                    name: "Chat 3",
                    img: "https://via.placeholder.com/40",
                    messages:[
                        { name: "Юля", content: "Привет!" },
                        { name: "Jon", content: "Helo" },
                        { name: "Юля", content: "Спик инглиш?" },
                    ],
                },
                4:{
                    url: "/chats/4",
                    name: "Chat 4",
                    img: "https://via.placeholder.com/40",
                    messages: []
                }
            },
        }
    },
    [sendMessage]: (store, actions) => {
        console.log('store', store)
        console.log('actions', actions)
        const {id, name, content} = actions.payload
        console.log('store[id]', store[id])
        return {
            ... store,
            chats: {
                ...store.chats,
                [id]: {
                    ... store.chats[id],
                    messages: [
                        ...store.chats[id].messages,
                        {name,content}
                    ]
                }
            }
        }
    },
    [addNewChat]: (store, actions) => {
        console.log('store', store)
        console.log('actions', actions)
        const {id, name} = actions.payload

        console.dir(Object.keys(store.chats))//Object.keys(chats).map((key, index) =>
        const chatsKeys = [...Object.keys(store.chats)];
        //const newKey = Math.max(...chatsKeys) + 1
        //const newKey =  name;
        const newKey =  id;
        console.log("newKey "+newKey)


        return {
            ... store,
            chats: {
                ...store.chats,
                [newKey]: {
                    name,
                    img: "",
                    url: "/chats/"+newKey,
                    messages:[]
                }
            }

        }
    },
    [deleteChat]: (store, actions) => {
        console.log('store', store)
        console.log('actions', actions)
        console.log(Object.entries(store.chats))
        //console.log(store.chats.items)
        const {id} = actions.payload
        console.log(Object.keys(store.chats).filter( key => key!=id) )

        //Object.keys(store.chats).filter( key => key!=id).forEach(key,item => newstore[item] =  store.chats[item])


        //forEach(key => store.chats[key])
        let newstore = {}
            // Object.keys(store.chats).forEach(key => {
            //     key!=id ? newstore.chats[key] = store.chats[key]:"";
            // });
        Object.keys(store.chats).filter( key => key!=id).reduce((obj, key) => {
            newstore[key] = store.chats[key]
        }, {})

        console.log(newstore)
        return {
            chats: { ...newstore }
            //store.chats.filter( key => !id).forEach(key => store.chats[key])
            // state.chats.filter(item => item.id !== action.payload)
            //     ...store.chats,
            //     ..console...state.chats.items.slice(0, id),
            //     tate,
            //     products: state.products.filter(item => item.id !== action.payload)
            //}
        }
    }
}, initialState)
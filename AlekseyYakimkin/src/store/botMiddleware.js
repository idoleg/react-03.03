import {sendMessage, addNewChat, createChat} from './chatActions'
import {sendMessageToBot} from './chatOperations'

// export const botAnswer =  function(store){
//     return function(next) { 
//         return function(action) {
//             console.log("bot answer next", next)
//             console.log("bot answer action", action)
//             next(action)
//         }
//     }
// }

const BOT_NAME = "Робот"
let timer = null

export default (store) => (next) => (action) => {
    console.log("bot answer action", action)
    next(action)
    console.log(sendMessage)
    const {id, name, content} = action.payload
    if(action.type === sendMessage.toString()){
        //const {id, name} = action.payload
        if(name !== BOT_NAME){
            store.dispatch(sendMessageToBot(BOT_NAME, id, content))
            // clearInterval(timer)
            // timer = setTimeout(generateBotAnswer, 2000,store, id, name)
        }
    }else if(action.type === addNewChat.toString()){
        //generateBotAnswerForNewChat(store, id, name)
        store.dispatch(sendMessageToBot(BOT_NAME, action.payload.id, "Привет!"))
    }
}

function generateBotAnswer(store, id, name) {
    const chatName = store.getState().chats.chats[id].name
    store.dispatch(sendMessage(id  ,BOT_NAME,`Привет, ${name}. Я - робот в чете ${chatName}`));

}

function generateBotAnswerForNewChat(store, id, name) {
    console.log(store)
    console.log(id)
    const chatName = store.getState().chats.chats[id].name
    store.dispatch(sendMessage(id  ,BOT_NAME,`Добро пожаловать в чат ${chatName}.  Я робот`));
    //store.dispatch(sendMessage(id  ,BOT_NAME,"test"));

}
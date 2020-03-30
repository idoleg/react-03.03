import {sendMessage} from './chatActions'

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

export const botAnswer = (store) => (next) => (action) => {
    console.log("bot answer action", action)
    next(action)
    console.log(sendMessage)
    if(action.type === sendMessage.toString()){
        const {id, name} = action.payload
        if(name !== BOT_NAME){
            clearInterval(timer)
            timer = setTimeout(generateBotAnswer, 2000,store, id, name)
        }
    }
}

function generateBotAnswer(store, id, name) {
    const chatName = store.getState().chats.chats[id].name
    store.dispatch(sendMessage(id  ,BOT_NAME,`Привет, ${name}. Я - робот в чете ${chatName}`));

}
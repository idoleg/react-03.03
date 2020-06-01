import ChatReducer from "../../../src/store/reducers/ChatReducer";
import {addMessage, addChat} from "../../../src/store/actions/ChatActions";


describe("ChatReducer", () => {

   it("addMessage", () => {
      const chatId = 81919;
      const name = "Someone";
      const messageId = "rearjgadsfsghj";
      const automated = true;
      const content = "Hey!";

      const store = new Map([[chatId, {
         messages: new Map()
      }]]);

      const action = addMessage(messageId, name, content, automated, chatId);

      expect(ChatReducer(store, action)).toMatchObject(
         new Map([[chatId, {
            messages: new Map([[messageId, {
               name: name,
               text: content,
               automated: automated
            }]])
         }]])
      );
   });

   it("addChat", () => {
      const id = 1;
      const name = "new chat";
      const imgUrl = "https://examle.com/1.jpg";

      const store = new Map();

      const action = addChat(id, name, imgUrl);

      expect(ChatReducer(store, action)).toMatchObject(
         new Map([[id, {
            name: name,
            avatar: imgUrl,
            messages: new Map()
         }]])
      );
   });

});

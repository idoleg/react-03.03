import {addChat} from "../../../src/store/actions/ChatActions";
import {ChatListMiddleware} from "../../../src/store/middlewares/ChatListMiddleware";
import {CHATS_PATH} from "../../../src/utils/Constants";
// import {push} from "connected-react-router";


describe("ChatListMiddleware", () => {

   it("addChat", () => {
      const store = {
         dispatch: jest.fn(),
      };
      const next = jest.fn();

      const chatId = 976;
      const action = addChat(chatId, "Name", "Avatar");

      ChatListMiddleware(store)(next)(action);

      // expect(store.dispatch).toHaveBeenCalledWith(push(CHATS_PATH + "/" + chatId));
      expect(store.dispatch).toHaveBeenCalledWith({
         payload: {
            args: [CHATS_PATH + "/" + chatId],
            method: "push",
         },
         type: "@@router/CALL_HISTORY_METHOD",
      });
   });
});


import LoadingReducer from "../../../src/store/reducers/LoadingReducer";
import {setChatsLoading} from "../../../src/store/actions/LoadingActions";
import {FETCHING, SUCCESS} from "../../../src/utils/Constants";


describe("LoadingReducer", () => {

   it("setChatsLoading", () => {
      const store = {
         chats: {
            state: FETCHING,
            message: "",
         }
      };

      const msg = "mess";
      const action = setChatsLoading(SUCCESS, msg);

      expect(LoadingReducer(store, action)).toMatchObject({
         chats: {
            state: SUCCESS,
            message: msg,
         }
      });
   });

});

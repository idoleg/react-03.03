import {setUser} from "../../../src/store/actions/UserActions";
import UserReducer from "../../../src/store/reducers/UserReducer";


describe("UserReducer", () => {

   it("setUser", () => {
      const username = "New un";

      const store = {
         username: "some username",
      };
      const action = setUser(username);

      expect(UserReducer(store, action)).toMatchObject(
         {
            username: username
         }
      );
   });
});

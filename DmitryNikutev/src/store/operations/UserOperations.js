import {ERROR, FETCHING, SUCCESS, USER_API_URL} from "../../utils/Constants";
import {setUserLoading} from "../actions/LoadingActions";
import {setUser} from "../actions/UserActions";


export const initUser = () => async (dispatch) => {
   dispatch(setUserLoading(FETCHING));

   try {
      const res = await fetch(USER_API_URL);
      if (res.status !== 200)
         throw new Error("" + res.status);
      const {name} = await res.json();

      dispatch(setUser(name));
      dispatch(setUserLoading(SUCCESS))
   } catch (e) {
      dispatch(setUserLoading(ERROR, e.name + " " + e.message))
   }

};

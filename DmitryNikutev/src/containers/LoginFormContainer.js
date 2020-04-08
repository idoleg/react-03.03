import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {LoginForm} from "../components/LoginForm/LoginForm";
import {setUser} from "../store/actions/UserActions";


const mapStateToProps = (store, props) => {
   return {
      username: store.user.username,
   }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
   setUser
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
   
   const onSetUser = (username) => {
      dispatchProps.setUser(username)
   };
   
   return {
      username: stateProps.username,
      setUsername: onSetUser,
   };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginForm);

import {connect} from "react-redux";
import {AppToolbar} from "../components/AppToolbar/AppToolbar";


const mapStateToProps = (store, props) => {
   return {
      username: store.user.username,
   }
};

export default connect(mapStateToProps)(AppToolbar);

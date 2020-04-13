import {connect} from "react-redux";
import {AppToolbar} from "../components/AppToolbar/AppToolbar";


const mapStateToProps = (store, props) => {
   return {
      username: store.user.username,
      loadingState: store.loading.user.state,
   }
};

export default connect(mapStateToProps)(AppToolbar);

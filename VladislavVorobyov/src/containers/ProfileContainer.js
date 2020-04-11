import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {changeUser} from "Actions/usersAction";
import {Settings} from "Components/Settings";

const mapStateToProps = ({users}, ownProps) => {
    const path = ownProps.match && ownProps.match.path? ownProps.match.path: undefined;
    return {
        open: path === '/profile/',
        config: {userName: users[1].name},
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changeUser,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const prevUserName = stateProps.config.userName;
    const changeUserDispatch = dispatchProps.changeUser;
    const handleConfigUpdate = ({userName = prevUserName}) => {
        changeUserDispatch(userName);
    };
    return {
        ...ownProps,
        ...stateProps,
        handleConfigUpdate,
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Settings)
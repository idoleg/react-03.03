import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {changeUser} from "Actions/usersAction";
import {Settings} from "Components/Settings";

const mapStateToProps = ({users}, ownProps) => {
    const user = users.find(user => user.id === 1);
    const path = ownProps.match && ownProps.match.path? ownProps.match.path: undefined;
    return {
        open: path === '/profile/',
        config: {userName: user? user.name : undefined},
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changeUser,
    push,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const prevUserName = stateProps.config.userName;
    const {changeUser, push} = dispatchProps;
    const handleConfigUpdate = ({userName = prevUserName}) => {
        changeUser(userName);
    };
    const handleClick = () => push('/profile/');

    return {
        ...ownProps,
        ...stateProps,
        handleConfigUpdate,
        handleClick,
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Settings)
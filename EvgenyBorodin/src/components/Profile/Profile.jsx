import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { updateProfile } from '../../store/chatActions.js';
import useInput from '../../hooks/useInput.js';

import './Profile.css'

const Profile = ({profile, updateProfile}) => {
    const [name, setName] = useInput(profile.defaultUser ? profile.defaultUser : '');

    const onProfileUpdate = () => {
        updateProfile({defaultUser: name})
    }

    return (<div className="content">
        <h1>Profile</h1>
        <form className="profile__form">
            <label>Name:&nbsp;
                <input type="text" name="user" value={name} onChange={setName} placeholder="Input your name"/>
            </label>
            <span className="profile__btn" onClick={onProfileUpdate}>Save</span>
        </form>
    </div>)
}

const mapStateToProps = (store, props) => {
    const profile = store.app.profile ? store.app.profile : {}
    return { profile }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateProfile
}, dispatch)

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//     const {profile} = stateProps;

//     const onUpdateProfile = (profile) => {
//         dispatchProps.updateProfile(profile)
//     }

//     return {
//         profile,
//         onUpdateProfile
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Profile)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
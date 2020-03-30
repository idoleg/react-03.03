import React, {Component} from "react";
import {connect} from 'react-redux'

import './Profile.css'

const Profile = ({name, age}) => {
    console.log(name);

    return (
        <div className="container">
            <div className="div-img">
                <img
                    className="img"
                    src="https://avatars.mds.yandex.net/get-pdb/1532005/3b2ab7ca-bfcd-4365-a079-cd979c5d9a5a/s1200?webp=false"
                    alt="Avatar"/>
            </div>
            <div className="img-txt">
                <h1>О себе:</h1>
                <p>
                    <span className="title">Ваше имя:</span>
                    <span className="answer">{name}</span>
                </p>
                <span className="title">Возраст:</span>
                <span className="answer">{age}  лет</span>
            </div>
        </div>
    );
};

const mapStateToProps = (store, props) => {
    const name = store.chats.state.profileData.name;
    const age = store.chats.state.profileData.age;
    //console.log(name);
    return {name, age}

}

export default connect(mapStateToProps)(Profile);
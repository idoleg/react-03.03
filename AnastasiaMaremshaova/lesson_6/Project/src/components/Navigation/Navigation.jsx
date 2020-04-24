import React, {Component, useState} from "react";
import Profile from '../Profile/Profile';
import FormCreateChat from '../FormCreateChat/FormCreateChat';
import {ConsoleNavigation} from '../ConsoleNavigation/ConsoleNavigation';
import ChatListContainer from '../../containers/ChatListContainer';
import {Loader} from '../Loader/Loader';
import './Navigation.css'
import '../Profile/Profile.css'

import {connect} from 'react-redux';

export const Navigation = ({isLoading, error}) => {

    const [classOpenProfile, setClassOpenProfile] = useState('showRight');
    const [classOpenFormCreateChat, setClassOpenFormCreateChat] = useState(
        'showUp'
    );

    function onSetClassOpenProfile() {
        let showProfile = (classOpenProfile === 'showLeft')
            ? 'showRight'
            : 'showLeft';
        setClassOpenProfile(showProfile);

    }

    function onSetClassOpenFormCreateChat() {

        let showFormCreateChat = (classOpenFormCreateChat === 'showDown')
            ? 'showUp'
            : 'showDown';
        setClassOpenFormCreateChat(showFormCreateChat);
    }

    function showUp(){
        setClassOpenFormCreateChat('showUp');
    }

    let res; 

    if (!isLoading){
        res =  <ChatListContainer classOpenFormCreateChat={classOpenFormCreateChat}/>
    }
    else
        res = <div className="isLoading"><Loader/></div>

        if(error) {
            res= <div className="error">Ошибка подключения</div>
        }
    
    return (
        <div className="Navigation">
            <div className="containerNavigation">
                <ConsoleNavigation
                    onSetClassOpenProfile={onSetClassOpenProfile}
                    onSetClassOpenFormCreateChat={onSetClassOpenFormCreateChat}
                    showUp={showUp}/>
                <FormCreateChat
        classOpenFormCreateChat={classOpenFormCreateChat}
        onSetClassOpenFormCreateChat={onSetClassOpenFormCreateChat}/>
                
                {res}
                <Profile
                    onSetClassOpenProfile={onSetClassOpenProfile}
                    classOpenProfile={classOpenProfile}/>

            </div>
        </div>
    )
}


const mapStateToProps = (store, props) => {
    const isLoading= store.chats.isLoading; 
    const error = store.chats.error;  
    console.log(error); 
    return {isLoading, error}; 

}

export default connect(mapStateToProps)(Navigation);

import React, {Component, useState} from "react";
import Profile from '../Profile/Profile';
import FormCreateChat from '../FormCreateChat/FormCreateChat';
import {ConsoleNavigation} from '../ConsoleNavigation/ConsoleNavigation';
import ChatListContainer from '../../containers/ChatListContainer';
import './Navigation.css'
import '../Profile/Profile.css'

export const Navigation = () => {

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
                <ChatListContainer classOpenFormCreateChat={classOpenFormCreateChat}/>

                <Profile
                    onSetClassOpenProfile={onSetClassOpenProfile}
                    classOpenProfile={classOpenProfile}/>

            </div>
        </div>
    )
}
import React, {Component} from "react";
import {Link} from 'react-router-dom'
import './IndexPage.css'
import InstallPopup from '../InstallPopup/index.jsx'

export const IndexPage =() => {
    const [openChatList, setOpenChatList] = React.useState(''); 



        return (
            
            <div className="container-index" style = {{display: openChatList}}>

                <div className="div-img-index"></div>
                <div className="text">
                <p className ="title">Добро пожаловать в чат истинных кошатников!</p>
                <p className="main-text">Здесь Вы обязательно обретете себе нового пушистого друга!</p>
                <button onClick={()=>{setOpenChatList('none')}} className="atuin-btn">
                    
                <ul>
                        <Link to="/chatlist/">
                     Перейти к чатам 
                    </Link>
                    </ul>
                   </button>
                </div>
                <InstallPopup/>
            </div>
        );
};
import React,  { Component }  from "react";

import './Profile.css'

export class Profile extends Component {
    render(){ 
        return (<div className="container">
        <div className="div-img">
            <img className="img"src="https://avatars.mds.yandex.net/get-pdb/1532005/3b2ab7ca-bfcd-4365-a079-cd979c5d9a5a/s1200?webp=false" alt="Avatar"/>
        </div>
        <div className="img-txt">
            <h1>О себе:</h1> 
            <p><span className="title">Ваше имя:</span> <span className="answer">Заядлая кошатница</span></p>
            <span className="title">Возраст:</span> <span className="answer">20 лет</span>
        </div>
    </div>); 
    }
};
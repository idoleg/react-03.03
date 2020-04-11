import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {DeleteChatForm} from './DeleteChat'
import './Header.css'

export const Header = ({headerName, deleteChat, id}) => {
    console.log("chatName " + headerName)
    console.log(deleteChat)
    return  <div className="Header">
                <h1>{headerName}</h1>
                <Link to="/profile" >Профиль</Link>
                <DeleteChatForm deleteChat={deleteChat} id={id} />
            </div>
}
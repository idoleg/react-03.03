import React from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './HeaderChat.css'

export const HeaderChat = ({nameChat}) => {

    return (
        <div className="HeaderChat">
            <div className="AvatarChat">
                <img src="src/img/lapa.svg" alt="avatarChat" className="img-avatarChat"/>
            </div>

            <p className="nameChat">{nameChat}</p>
        </div>

    );
}
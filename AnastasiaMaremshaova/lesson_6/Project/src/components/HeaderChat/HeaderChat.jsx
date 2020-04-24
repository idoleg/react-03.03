import React from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import {useStylesBtnBack} from './useStyles'
import {Link} from 'react-router-dom'
import './HeaderChat.css'

export const HeaderChat = ({nameChat, setClassShowChatList}) => {

    const classesBtnBack = useStylesBtnBack(); 

    return (
        <div className="HeaderChat">
                
                <Button
                data-title="ChatList"
                classes={{root: classesBtnBack.root}}
                    onClick={()=>{setClassShowChatList('exitChat')}}
                    variant="contained"
                    className="btn-back-chat">
                        <ul>
                        <Link to="/chatlist/">
                    <img src='src/img/back.svg' className="img-back-chat"/>
                    </Link>
                    </ul>
                </Button>

            <div className='avatarNameChat'>
            <div className="AvatarChat">
                <img src="src/img/lapa.svg" alt="avatarChat" className="img-avatarChat"/>
                
            </div><p className="nameChat">{nameChat}</p>
            </div>

           
        </div>

    );
}
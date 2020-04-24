import React, {Component} from 'react';
import './consoleNavigation.css'
import Profile from '../Profile/Profile'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
    root: {
        borderRadius: '50%',
        marginRight: '5%',
    },
    li: {
        '& .MuiButton-text':{
            padding: 0
        },
        borderRadius: '50%',
        width: '19%',
        height: '100%',
        marginLeft: '2%',
        padding: '2%',
    }


})

export const ConsoleNavigation = (
    {onSetClassOpenProfile, onSetClassOpenFormCreateChat, showUp}
) => {
    const classes = useStyles();


    return (
        <div className="consoleNavigation">
            <Button
            data-title="profile"
                className="btn-profile"
                classes={{
                    root: classes.li
                }}
                onClick={() => {
                    showUp();
                    onSetClassOpenProfile();
                }}>
                <img src="src/img/avatar.jpg" alt="avatar" className="img-avatar"/>
            </Button>
            <div className="btn-container">
                <Button
                data-title='New chat'
                    classes={{
                        root: classes.root
                    }}
                    className="btn-addNewChat"
                    onClick={() => {
                        onSetClassOpenFormCreateChat();
                    }
}>
                    <img src='src/img/plus.svg' className="img-plus"/>
                </Button>

            </div>

        </div>
    )
}
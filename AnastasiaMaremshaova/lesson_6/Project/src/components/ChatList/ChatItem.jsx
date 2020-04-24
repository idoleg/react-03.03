import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';
import './ChatList.css'
import {useStyles, useStylesEditTextField,  useStylesBtn} from './useStyles';
import {SVGFire} from './SVG-fire'


export const ChatItem = ({id, chats, openedEditNameChat,  OnDeleteChat, OnSaveNameChat, 
    OnSetFill, OnOpenEditNameChat, OnExitEditNameChat}) =>{

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [btnShow, setBtnShow] = React.useState('none');
    const [btnShowMenu, setBtnShowMenu] = React.useState('');
    const [editTextField, setEditTextField] = React.useState('readonly');
    const [outlineShow, setOutlineShow] = React.useState('none');
    const [flagEditNameChat, setFlagEditNameChat] = React.useState(null); 


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setFlagEditNameChat(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    }
    
    const propsBtn ={
        btnShow: btnShow
    }
    const propsBtnMenu={
        showBtn: btnShowMenu
    }

    const classes = useStyles(propsBtnMenu);
    const classesBtn = useStylesBtn(propsBtn);

    const propsEditTextField={
        outlineShow: outlineShow
    };

    const classesStylesEditTextField = useStylesEditTextField(propsEditTextField);

    const [nameChat, setNameChat] = React.useState(chats[id].name); 
    const textInput = React.useRef();
    const classFill = chats[id].fill ? 'checkFill' : '';

    if (id !== 'null')
    {
                    return (
                        <div className={"chat "} key={id} id={id}>
                                    <ListItem
                                    
                                        onClick={()=>{OnSetFill(id);}}
                                        className = {classFill}
                                        alignItems="flex-start"
                                        component={Link}
                                        to={`/chats/${id}`}
                                        key={id}
                                        id={id}>

                                        
                                        <ListItemAvatar>
                                            <Avatar
                                                classes={{
                                                    root: classes.MuiAvatarRoot,
                                                    img: classes.MuiAvatarImg
                                                }}
                                                className="avatar"
                                                alt="Remy Sharp"
                                                src="src/img/lapa.svg"/>
                                        </ListItemAvatar>
                                        <ListItemText
                                            classes={{
                                                multiline: classes.MuiListItemTextMultiline,
                                                primary: classes.MuiTypographyBody1,
                                                secondary: classes.MuiTypographyBody2
                                            }}
                                            
                                       
                                            secondary={<React.Fragment > <Typography
                                                    classes={{
                                                        root: classes.MuiTypographyRoot,
                                                        body2: classes.MuiTypographyBody2
                                                    }}
                                                    className="White"
                                                    component="span"
                                                    variant="body2">
                                                    {
                                                        chats[id]
                                                            .messages[chats[id].messages.length - 1]
                                                            .name
                                                    }
                                                </Typography>
                                                {
                                                chats[id]
                                                    .messages[chats[id].messages.length - 1]
                                                    .content
                                                    .substr(0, 22)
                                            }</React.Fragment>
                                        }/>
                                        <SVGFire fire = {chats[id].fire}/>
                                    </ListItem>
                                    <form className = "form-background form-position" noValidate autoComplete="off" > 
                                       <TextField
                                       inputRef = {textInput}
                                       onChange={(event) => {
                                           setNameChat(event.target.value)
                                       }}
                                           
                                           value={nameChat}
                                           classes={{
                                               root: classesStylesEditTextField.root
                                           }}
                                           key={id}
                                           
                                           inputProps={{
                                               readOnly: editTextField,
                                               cursor: 'pointer'
                                           }}/>

                                       <Button
                                           className="btn-save"
                                           onClick={() => {
                                            setBtnShowMenu(''); 
                                               OnExitEditNameChat(); 
                                               setBtnShow('none');
                                               setOutlineShow('none');
                                               setEditTextField('readonly')
                                               OnSaveNameChat(id, nameChat); 
                                           }}
                                           classes={{
                                               root: classesBtn.root
                                           }}
                                           
                                           data-title="Save">
                                           <img src="src/img/save.svg" alt="img-save" className="img-save"/>
                                       </Button>

                                       <Button
                                       className="btn-cancel"
                                           onClick={() => {
                                            setBtnShowMenu(''); 
                                               OnExitEditNameChat(); 
                                               setEditTextField('readonly')
                                               setBtnShow('none') ;
                                               setOutlineShow('none');
                                               
                                           }}
                                           classes={{
                                               root: classesBtn.root
                                           }}    
                                           data-title="Cancel">
                                           <img src="src/img/cancel.svg" alt="img-cancel" className="img-cancel"/>
                                       </Button>
                                   </form>
                                    <Button
                                       
                                        aria-controls="fade-menu"
                                        aria-haspopup="true"
                                        onClick={(event) => {

                                            handleClick(event);
                                        }}
                                        className="btn-menu"
                                        classes={{
                                            root: classes.root
                                        }}>
                                        <img src="src/img/menu.svg" alt="" className="img-menu"/>
                                    </Button>
                                    <Menu
                                        id="fade-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={() => {
                                            handleClose()
                                        }}>
                                        <MenuItem
                                            onClick={(event) => {
                                                OnDeleteChat(anchorEl.parentElement.id);
                                                handleClose();
                                            }
                                        }>Удалить чат</MenuItem>
                                        <MenuItem  
                                        ListItemClasses={{disabled: !openedEditNameChat}}
                                            onClick={() => {
                                                setBtnShowMenu('none'); 
                                                OnOpenEditNameChat(); 
                                                setOutlineShow('solid');
                                                setEditTextField('');
                                                setBtnShow('block'); 
                                                handleClose();
                                                textInput.current.focus(); 
                                            }}>Изменить название чата</MenuItem>
                                    </Menu>

                                    <Divider
                                        variant="inset"
                                        component="li"
                                        classes={{
                                            inset: classes.MuiDividerInset
                                        }}/>
                                </div>); 
    }
    else{
        return ''; 
    }
}





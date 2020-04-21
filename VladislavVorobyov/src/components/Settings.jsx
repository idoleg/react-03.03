import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import {ProfileDialog} from "Components/ProfileDialog/ProfileDialog";
import {makeStyles} from "@material-ui/core/styles";


export const Settings = ({className="", open=false, config, handleConfigUpdate, handleClick})=> {
    const [dialogOpened, setDialogOpened] = useState(open);
    const handleOpenDialog = ()=> setDialogOpened(true);
    const handleCloseDialog = ()=> setDialogOpened(false);
    return (
        <>
            <List className={className} component="div">
                <ListItem button onClick={handleClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <SettingsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={'PROFILE'} />
                </ListItem>
            </List>
            <ProfileDialog
                open={dialogOpened}
                config={ config }
                handleClose={handleCloseDialog}
                handleConfigUpdate={handleConfigUpdate}
            />
        </>
    )
};

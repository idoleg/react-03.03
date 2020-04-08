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


const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        '&:visited': {
            color: 'inherit',
        }
    },
}));

export const Settings = ({className="", open=false, config, profileUrl='/profile/',handleConfigUpdate})=> {
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(open);
    const handleOpenDialog = ()=> setDialogOpened(true);
    const handleCloseDialog = ()=> setDialogOpened(false);
    return (
        <>
            <List className={className} component="div">
                <Link className={classes.link} to={profileUrl} onClick={handleOpenDialog}>
                    <ListItem button >
                        <ListItemAvatar>
                            <Avatar>
                                <SettingsIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={'PROFILE'} />
                    </ListItem>
                </Link>
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

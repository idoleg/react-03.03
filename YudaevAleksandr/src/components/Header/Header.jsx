import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;
const minWidth = 180;

const useStyles = makeStyles(theme => ({
    appBar: {
        maxWidth: `calc(100% - ${drawerWidth}px)`,
        minWidth: `calc(100% - ${minWidth}px)`,
        width: `calc(100% - 15%)`,
        marginLeft: drawerWidth,
    },
}));

export const Header = () => {
    const classes = useStyles();

    return(
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Chat with RobotAlex
                </Typography>
            </Toolbar>
        </AppBar>
    )
};
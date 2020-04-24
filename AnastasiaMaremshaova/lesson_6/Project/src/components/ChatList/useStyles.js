import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
 
    root: props=>( {
        marginTop: 10,
        position: 'absolute',
        top: 0,
        right: 0,
        display: props.showBtn
    }),

    MuiAvatarRoot: {
        width: 60,
        height: 60
    },
    MuiAvatarImg: {
        width: '69%',
        height: '66%'
    },

    MuiDividerInset: {
        margin: 0
    },

    MuiListItemTextMultiline: {
        marginLeft: 20,
        marginTop: 7
    },

    MuiListPadding: {
        paddingTop: 0
    },

    MuiTypographyRoot: {
        marginRight: 10,
        marginLeft: 15,
        
    },
    MuiTypographyBody1: {
        fontSize: '1.18rem',
        fontWeight: 200,
    },
    MuiTypographyBody2: {
        fontSize: '1.05rem',
        marginTop: '11%'
    }

})

export const useStylesBtn = makeStyles({
    root:  props=>({
        display: props.btnShow,
        boxSizing: 'border-box',
        marginTop: '1%',
        marginLeft: 5,
        height: 40,
        width: 40, 
        padding: 0,
        paddingTop: '5px',
        borderRadius: '30px',
        minWidth: '20px',
        backgroundColor: 'transparent',
        border: 'none',
        '& .MuiButtonBase-root':{
            minWidth: '20px',
        }
    })
});

export const useStylesListItem = makeStyles({
    root: props=>({
        backgroundColor: props.color,
    })
})


export const useStylesEditTextField = makeStyles({

    root: props=>({
        marginTop: '2px',
 
        '& .MuiInput-underline:before': {
            borderBottom: props.outlineShow,
            color: ' rgba(184, 121, 184)'
        },
        '& .MuiInput-underline:after': {
            borderBottom: props.outlineShow,
            color: ' rgba(184, 121, 184)'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: props.outlineShow,
            color: ' rgba(184, 121, 184)'
        }
    })
}); 


import {makeStyles} from '@material-ui/core/styles';

export const useStylesTextField = makeStyles({
    root: props => ({
        width: '80%',

        '& .MuiFormLabel-root.Mui-focused': {
            color: ' rgb(108, 79, 136)'
        },

        '& .MuiInput-underline:before': {
            borderBottom: props.flagEdit,
            color: ' rgb(108, 79, 136)'
        },
        '& .MuiInput-underline:after': {
            borderBottom: props.flagEdit,
            color: ' rgb(108, 79, 136)'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: props.flagEdit,
            color: ' rgb(108, 79, 136)'
        },
        '& .MuiInputBase-root': {
            width: '100%',
            color: 'black'
        }
    })
})

export const useStylesBtnBack = makeStyles({
    root: {
        margin: 'auto 5%',
        backgroundColor: 'rgb(91, 33, 145)',
        borderRadius: '50%',
        padding: '2%',
        boxSizing: 'border-box',
        minWidth: '14%',
        
        '&:hover': {
            backgroundColor: '#AA83BB'
        }
    }

});

export const useStyles = makeStyles({
    root: props => (
        {   
            
            marginTop: '3%', 
             width: '12%',
            height: '16%',
            borderRadius: '30px',
            minWidth: '12%',
            padding: 0,
            display: props.flagShowBtnEdit}
    ),

    rootBtnSave: props => (
        {
            marginTop: '3%', 
            width: '12%',
            height: '16%',
            borderRadius: '30px',
            minWidth: '12%',
            padding: 0,
            minWidth: '0', display: props.flagShowBtnSave}
    )

})




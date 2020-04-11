import {makeStyles} from '@material-ui/core/styles';

export const useStylesTextField = makeStyles({
    root: props => ({

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
            width: '300px',
            color: 'black'
        }
    })
})

export const useStylesBtnBack = makeStyles({
    root: {
        backgroundColor: 'rgb(91, 33, 145)',
        borderRadius: '50%',
        marginTop: 10,
        marginLeft: 30,
        '&:hover': {
            backgroundColor: '#AA83BB'
        }
    }

});

export const useStyles = makeStyles({
    root: props => (
        {height: 40,
            width: 40, 
            padding: 0,
            borderRadius: '30px',
            minWidth: '20px',display: props.flagShowBtnEdit}
    ),

    rootBtnSave: props => (
        {
            height: 40,
            width: 40, 
            padding: 0,
            borderRadius: '30px',
            minWidth: '20px', display: props.flagShowBtnSave}
    )

})




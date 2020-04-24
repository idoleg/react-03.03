import {makeStyles} from '@material-ui/core/styles';


export const useStylesTextField = makeStyles({
    root: props => ({

        marginLeft: '5%',
        width: '65%',
        '& .MuiFormLabel-root.Mui-focused':{
            color: '#d690cd'
        },
        '& .MuiFormLabel-root':{
            color: '#d690cd'
        },
        '& .MuiInput-underline':{
            borderBottom: '2px solid #d690cd'
        },

        '& .MuiInput-underline:before': {
            borderBottom: '2px solid #d690cd'
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #d690cd'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid #d690cd'
        },
        '& .MuiInputBase-input': {
            width: '100%',
            color: 'white',
            
        }
    })
})


export const useStylesBtn = makeStyles({
    root: {
        boxSizing: 'border-box',
        marginTop: '3%',
        marginLeft: '1%',
        height: 40,
        width: 40, 
        padding: 0,
        borderRadius: '30px',
        minWidth: '20px',
        '& .MuiButtonBase-root':{
            minWidth: '20px',
        }
    }
})

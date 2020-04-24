import {makeStyles} from '@material-ui/core/styles';


export const useStylesBtnBack = makeStyles({
    root: {
        backgroundColor: 'rgb(91, 33, 145)',
        borderRadius: '50%',
        margin: 'auto 3% auto 3%',
        padding: '2%',
        boxSizing: 'border-box',
        minWidth: '0px',
        '& .MuiButton-root':{
            minWidth: '0%',
        },
        '&:hover': {
            backgroundColor: '#AA83BB'
        }
    }

});
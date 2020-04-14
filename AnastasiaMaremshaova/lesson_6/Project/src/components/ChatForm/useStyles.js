import {makeStyles} from '@material-ui/core/styles';


export const useStylesTextField = makeStyles({
    root: {
        marginLeft: '2%',
        '& .MuiInputLabel-formControl':{
            top: 9,
            left: 4
        },
        '& .MuiFilledInput-root':{
            backgroundColor: 'rgba(0, 0, 0, 0.0)',

        },
        '& .MuiFilledInput-multiline':{
            padding: '11px 0 11px 0'
        },
        '& .MuiInputBase-input':{
            padding: '22px 10px 15px 10px',
            background: 'rgb(236, 236, 236)',
            borderRadius: 40,
            color: 'rgb(91, 33, 145)'
        },
      '& label.Mui-focused': {
        color: '#AA83BB',
      },
      '& .MuiFilledInput-underline:before':{
        borderBottom: 'none',
      },
      '& .MuiFilledInput-underline:after':{
        borderBottom: 'none',
      },
      '& .MuiInputLabel-filled':{
        color: '#AA83BB'
      },
    },
  });

export const useStylesBtn = makeStyles({
        root :{
            marginLeft: '1%',
                backgroundColor: 'rgb(91, 33, 145)',
                borderRadius: '50%',
                marginTop: 10,
                '&:hover':{
                    backgroundColor: '#AA83BB',
                    transition: '2s'
                }
            }
  }); 
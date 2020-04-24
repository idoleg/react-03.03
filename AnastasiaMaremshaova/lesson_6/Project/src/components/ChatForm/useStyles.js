import {makeStyles} from '@material-ui/core/styles';


export const useStylesTextField = makeStyles({
    root_name: {
       
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '20%',

        '& .MuiInputLabel-formControl':{
            top: '-12%',
            left: '-5%'
        },
        '& .MuiFilledInput-root':{
            backgroundColor: 'rgba(0, 0, 0, 0.0)',

        },
        '& .MuiFilledInput-multiline':{
          padding: '0px'
        },
        '& .MuiInputBase-input':{
            
            fontSize: '2.3vh',
            borderRadius: '10px',
            overflow: 'auto !important',
            width: '68%',
            padding: '15px 8px 15px 8px',
            background: 'rgb(236, 236, 236)',
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

    root_message: {
      marginLeft: '3%',
      width: '80%',
      '& .MuiInputLabel-formControl':{
          top: 5,
          left: 4
      },
      '& .MuiFilledInput-root':{
          backgroundColor: 'rgba(0, 0, 0, 0.0)',

      },
      '& .MuiFilledInput-multiline':{
        padding: '0px'
      },
      '& .MuiInputBase-input':{
          fontSize: '2.5vh',
          borderRadius: '10px',
          height: '45% !important',
          overflow: 'auto !important',
          padding: '15px 10px 15px 10px',
          background: 'rgb(236, 236, 236)',
          color: 'rgb(91, 33, 145)'
      },
      '& .MuiInputBase-input::-webkit-scrollbar' :{
        width: '10px',
        height: '10px'
    },
    
    '& .MuiInputBase-input::-webkit-scrollbar-track': {
        background: '#AA83BB',
        background: '-webkit-linear-gradient(bottom, #AA83BB, #6F3D77)',
        background: '-moz-linear-gradient(bottom, #AA83BB, #6F3D77)',
        background: 'linear-gradient(to top, #AA83BB, #6F3D77) !important',
        borderRadius: '10px'
    },
    
    '& .MuiInputBase-input::-webkit-scrollbar-thumb': {
        background: 'rgb(91, 32, 99)',
        borderRadius: '5px'
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
  }
  });

export const useStylesBtn = makeStyles({
        root :{
                padding: 0,
                marginLeft: '2%',
                minWidth: '35px',

                backgroundColor: 'rgb(91, 33, 145)',
                borderRadius: '50%',
                '&:hover':{
                    backgroundColor: '#AA83BB',
                    transition: '2s'
                }
            }
  }); 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  item: {
    cursor: 'pointer',
    transition: '0.3s',
    borderBottom: '1px rgba(189, 189, 189, 0.3) solid',
    '&:hover': {
      opacity: '0.7'
    }
  }
}));

export default useStyles;
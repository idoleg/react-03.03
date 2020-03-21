import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  item: {
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      opacity: '0.7'
    }
  }
}));

export default useStyles;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: '#fff'
  },
  link: {
    paddingRight: 15,
    paddingLeft: 15,
    textDecoration: 'none',
    '&:not(:last-child)': { borderRight: '1px #fff solid' }
  }
}));

export default useStyles;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import firebaseConfig from '../../../helper/Firebase/firebaseConfig';
import logo from '.././../../logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'transparent',
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

const PrimarySearchAppBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = (event) => {
    event.preventDefault();
    firebaseConfig.auth().signOut();
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <img src={logo} className='App-logo' alt='logo' />
          </IconButton>
          <Typography variant='h5' className={classes.title}>
            Reminder App
          </Typography>
          <div>
            <Tooltip title='Add Reminder' style={{ margin: '10px' }}>
              <Fab
                className={classes.margin}
                size='small'
                color='secondary'
                aria-label='add'
                onClick={props.handleOpen}>
                <AddIcon className='add-icon' />
              </Fab>
            </Tooltip>
            <Tooltip title='Profile' style={{ margin: '10px' }}>
              <Fab
                className={classes.margin}
                size='small'
                color='default'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}>
                <AccountCircle />
              </Fab>
            </Tooltip>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PrimarySearchAppBar;

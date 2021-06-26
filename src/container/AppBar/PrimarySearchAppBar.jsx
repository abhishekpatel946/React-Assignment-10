import React, { useContext } from 'react';
import firebaseConfig from '../../helper/firebase/firebaseConfig';
import { makeStyles } from '@material-ui/core/styles';
import logo from './../../logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    marginRight: '10px',
    tabSize: '10px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));

const PrimarySearchAppBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const logout = (event) => {
    event.preventDefault();
    firebaseConfig.auth().signOut();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <img src={logo} className='App-logo' alt='logo' />
          <Typography className={classes.title} variant='h5' noWrap>
            Reminder App
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton edge='start' aria-haspopup='true' color='inherit'>
              <Fab
                className={classes.margin}
                size='small'
                color='secondary'
                aria-label='add'>
                <AddIcon className='add-icon' onClick={props.handleOpen} />
              </Fab>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'>
              <AccountCircle />
              <Typography className={classes.title} variant='h6' noWrap>
                User
              </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default PrimarySearchAppBar;

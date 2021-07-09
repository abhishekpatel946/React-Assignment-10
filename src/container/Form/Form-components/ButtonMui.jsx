import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './style.scss';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));

const ButtonMui = (props) => {
  const classes = useStyles();

  // destructring props
  const { type, variant, title, color, onClick } = props;

  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      onClick={onClick}
      className={classes.submit}
      fullWidth>
      {title}
    </Button>
  );
};

// typechecking with propTypes
ButtonMui.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default ButtonMui;

import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './style.scss';

const Buttons = (props) => {
  // destructring props
  const { title, color, onClick } = props;

  return (
    <Button
      className='buttonField'
      variant='contained'
      color={color}
      onClick={onClick}>
      {title}
    </Button>
  );
};

// typechecking with propTypes
Buttons.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Buttons;

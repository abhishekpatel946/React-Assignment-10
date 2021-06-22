import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './style.scss';

const DateMui = (props) => {
  // destructring props
  const { value, onChange } = props;

  return (
    <TextField
      className='dateField'
      id='date'
      onChange={onChange}
      type='date'
      value={value}
      required
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

// typechecking with propTypes
DateMui.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default DateMui;

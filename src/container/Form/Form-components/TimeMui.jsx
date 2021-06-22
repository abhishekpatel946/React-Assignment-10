import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './style.scss';

const TimeMui = (props) => {
  // destructring props
  const { value, onChange } = props;

  return (
    <TextField
      className='dateField'
      id='time'
      onChange={onChange}
      type='time'
      value={value}
      required
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

// typechecking with propTypes
TimeMui.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TimeMui;

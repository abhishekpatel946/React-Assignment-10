import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './style.scss';

const InputText = (props) => {
  // destructring props
  const { type, value, name, placeholder, onChange } = props;

  return (
    <TextField
      className='inputField'
      id='standard-basic'
      label={placeholder}
      type={type}
      value={!value ? ' ' : value}
      name={name}
      required
      onChange={onChange}
    />
  );
};

// typechecking with propTypes
InputText.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;

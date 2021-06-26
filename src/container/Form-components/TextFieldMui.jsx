import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './style.scss';

const TextFieldMui = (props) => {
  // destructring props
  const {
    variant,
    margin,
    autoComplete,
    type,
    value,
    name,
    autoFocus,
    placeholder,
    onChange,
  } = props;

  return (
    <TextField
      className='inputField'
      id='standard-basic'
      label={placeholder}
      type={type}
      value={!value ? ' ' : value}
      name={name}
      onChange={onChange}
      variant={variant}
      margin={margin}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      required
    />
  );
};

// typechecking with propTypes
TextFieldMui.propTypes = {
  variant: PropTypes.string,
  margin: PropTypes.string,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  autoFocus: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextFieldMui;

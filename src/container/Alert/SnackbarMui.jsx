import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import { Alert } from './Alert';

const SnackbarMui = (props) => {
  // destructring props
  const { msg, severity, anchorOrigin } = props;

  // state for alert
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}>
      <Alert onClose={handleClose} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

// typechecking with propTypes
SnackbarMui.propTypes = {
  mgs: PropTypes.string,
  severity: PropTypes.string,
  anchorOrigin: PropTypes.object,
};

export default SnackbarMui;

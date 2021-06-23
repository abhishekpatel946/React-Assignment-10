import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const AlertMui = (props) => {
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
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}>
      <Alert onClose={handleClose} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

// typechecking with propTypes
AlertMui.propTypes = {
  mgs: PropTypes.string,
  severity: PropTypes.string,
  anchorOrigin: PropTypes.object,
};

export default AlertMui;

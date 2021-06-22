import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './style.scss';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const ReminderTable = (props) => {
  // destructring props
  const { editRow, deleteOldReminder, reminders } = props;
  const classes = useStyles();

  return (
    <div className='reminder-table'>
      <TableContainer className='tableContainer' component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow className='thead'>
              <StyledTableCell align='center'>Pass Reminders</StyledTableCell>
              <StyledTableCell align='center'>Date/Time</StyledTableCell>
              <StyledTableCell align='center'>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reminders && reminders.length > 0 ? (
              reminders.map((reminder) => (
                <StyledTableRow key={reminder.id}>
                  <StyledTableCell component='th' scope='row'>
                    {reminder.title}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {reminder.dateTime}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <EditIcon
                      onClick={() => {
                        editRow(reminder);
                      }}
                    />
                    <DeleteIcon
                      onClick={() => deleteOldReminder(reminder.id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableCell align='center'>
                No Past Reminder left.
              </StyledTableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer className='tableContainer' component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow className='thead'>
              <StyledTableCell align='center'>
                UpComing Remiders
              </StyledTableCell>
              <StyledTableCell align='center'>Date/Time</StyledTableCell>
              <StyledTableCell align='center'>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reminders && reminders.length > 0 ? (
              reminders.map((reminder) => (
                <StyledTableRow key={reminder.id}>
                  <StyledTableCell component='th' scope='row'>
                    {reminder.title}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {reminder.dateTime}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <EditIcon
                      onClick={() => {
                        editRow(reminder);
                      }}
                    />
                    <DeleteIcon
                      onClick={() => deleteOldReminder(reminder.id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableCell align='center'>
                No UpComing Reminder left.
              </StyledTableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// typechecking with propTypes
ReminderTable.propTypes = {
  reminders: PropTypes.object,
  editRow: PropTypes.func,
  deleteOldReminder: PropTypes.func,
};

export default ReminderTable;

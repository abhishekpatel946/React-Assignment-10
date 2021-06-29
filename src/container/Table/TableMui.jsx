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
import Tooltip from '@material-ui/core/Tooltip';
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

const TableMui = (props) => {
  // destructring props
  const { editRow, deleteOldReminder, reminders, tableHeading } = props;
  const classes = useStyles();

  return (
    <div className='reminder-table'>
      <TableContainer className='table-container' component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow className='thead' key='heading'>
              <StyledTableCell align='left'>{tableHeading}</StyledTableCell>
              <StyledTableCell align='center'>Date</StyledTableCell>
              <StyledTableCell align='center'>Time</StyledTableCell>
              <StyledTableCell align='center'>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reminders && reminders.length > 0 ? (
              reminders.map((reminder) => (
                <StyledTableRow key={reminder.id}>
                  <StyledTableCell component='td' scope='row'>
                    {reminder.title}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {reminder.date}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {reminder.time}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <span className='actions-icons'>
                      <Tooltip title='Edit'>
                        <EditIcon
                          className='edit-icons'
                          onClick={() => {
                            editRow(reminder);
                          }}
                        />
                      </Tooltip>
                    </span>
                    <span className='actions-icons'>
                      <Tooltip title='Delete'>
                        <DeleteIcon
                          className='del-icons'
                          onClick={() => deleteOldReminder(reminder.id)}
                        />
                      </Tooltip>
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell component='td' align='center'>
                  No Reminder left.
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// typechecking with propTypes
TableMui.propTypes = {
  reminders: PropTypes.array,
  editRow: PropTypes.func,
  deleteOldReminder: PropTypes.func,
  tableHeading: PropTypes.string,
};

export default TableMui;

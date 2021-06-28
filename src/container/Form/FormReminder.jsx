import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { TextFieldMui, ButtonMui } from './Form-components';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Form-components/style.scss';

const FormReminder = (props) => {
  // destructring props
  const {
    editing,
    addNewReminder,
    setEditing,
    currentReminder,
    updateOldReminder,
    setOpen,
  } = props;

  const [newReminder, setNewReminder] = useState([]);
  const [oldReminder, setOldReminder] = useState(currentReminder);
  const [dateValue, setDateValue] = useState(new Date());

  const handleInputChange = (event) => {
    if (editing) {
      setOldReminder({
        id: currentReminder.id,
        title: event.target.value,
        date: moment(oldReminder.timeStamp).format('L'),
        time: moment(oldReminder.timeStamp).format('LT'),
        timeStamp: currentReminder.timeStamp,
      });
    } else {
      setNewReminder({
        title: event.target.value,
      });
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (editing) {
      setOldReminder({
        ...oldReminder,
        date: moment(oldReminder.dateValue).format('LL'), // playing with momentAPI
        time: moment(oldReminder.dateValue).format('LT'), // check others format for date & time
        timeStamp: dateValue,
      });
      updateOldReminder(oldReminder.id, oldReminder);
    } else {
      setNewReminder({
        ...newReminder,
        date: moment(newReminder.dateValue).format('LL'), // playing with momentAPI
        time: moment(newReminder.dateValue).format('LT'), // check others format for date & time
        timeStamp: dateValue,
      });
      addNewReminder(newReminder);
    }

    // reset the value;s
    setDateValue(new Date());
  };

  const handleCancelClick = () => {
    setOpen(false);
    setEditing(false);
  };

  return (
    <Grid
      container
      direction='column'
      justify='space-evenly'
      alignItems='stretch'>
      <form noValidate>
        <TextFieldMui
          name={'title'}
          type={'text'}
          placeholder={'Enter the title'}
          value={!editing ? newReminder.title : oldReminder.title}
          onChange={handleInputChange}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className='dateField'
            label='Masked datepicker'
            value={dateValue}
            placeholder='01/01/2021'
            onChange={(date) => setDateValue(date)}
            format='dd/MM/yyyy'
            clearable
            required
          />
          <KeyboardTimePicker
            className='dateField'
            label='Masked timepicker'
            placeholder='08:00 AM'
            mask='__:__ _M'
            value={dateValue}
            onChange={(date) => setDateValue(date)}
            required
          />
        </MuiPickersUtilsProvider>
        <ButtonMui
          title={!editing ? 'Add Reminder' : 'Update Reminder'}
          variant={'contained'}
          fullWidth={'fullWidth'}
          color={'primary'}
          onClick={handleClick}
        />
        <ButtonMui
          variant={'contained'}
          title={'Cancel'}
          color={'secondary'}
          fullWidth={'fullWidth'}
          onClick={handleCancelClick}
        />
      </form>
    </Grid>
  );
};

// typechecking with propTypes
FormReminder.propTypes = {
  addNewReminder: PropTypes.func,
  editing: PropTypes.bool,
  setEditing: PropTypes.func,
  currentReminder: PropTypes.array,
  updateOldReminder: PropTypes.func,
  setOpen: PropTypes.func,
};

export default FormReminder;

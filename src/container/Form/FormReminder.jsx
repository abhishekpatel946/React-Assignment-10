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
import { nanoid } from 'nanoid';

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
  const [selectedDate, setDate] = useState(moment());
  const [selectedTime, setTime] = useState(moment());

  const onDateChange = (value) => {
    setDate(value);
  };
  const onTimeChange = (value) => {
    setTime(value);
  };

  const handleInputChange = (event) => {
    if (editing) {
      setOldReminder({
        id: currentReminder.id,
        title: event.target.value,
        date: moment(selectedDate).format('LL'),
        time: moment(selectedTime).format('LT'),
        timestamp: currentReminder.timestamp,
      });
    } else {
      setNewReminder({
        id: nanoid(),
        title: event.target.value,
        date: moment(selectedDate).format('LL'),
        time: moment(selectedTime).format('LT'),
        timestamp: moment(selectedTime).toDate(),
      });
    }
  };

  // console.log(
  //   moment(selectedDate).format('LL'),
  //   '\n',
  //   moment(selectedTime).format('LT'),
  //   '\n',
  //   moment(selectedTime, selectedDate).toDate()
  // );

  // console.log(newReminder);

  // console.log(
  //   newReminder.date,
  //   '\n',
  //   newReminder.time,
  //   '\n',
  //   newReminder.timestamp
  // );

  const handleClick = (event) => {
    event.preventDefault();
    if (editing) {
      setOldReminder({
        ...oldReminder,
        date: moment(selectedDate).format('LL'),
        time: moment(selectedTime).format('LT'),
        timestamp: moment(selectedTime).toDate(),
      });
      updateOldReminder(oldReminder.id, oldReminder);
    } else {
      setNewReminder({
        ...newReminder,
        date: moment(selectedDate).format('LL'),
        time: moment(selectedTime).format('LT'),
        timestamp: moment(selectedTime).toDate(),
      });
      addNewReminder(newReminder);
    }
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
            value={selectedDate}
            onChange={onDateChange}
            placeholder='01/01/2021'
            format='dd/MM/yyyy'
            clearable
            required
          />
          <KeyboardTimePicker
            className='dateField'
            label='Masked timepicker'
            mask='__:__ _M'
            value={selectedTime}
            onChange={onTimeChange}
            required
          />
        </MuiPickersUtilsProvider>
        <ButtonMui
          title={!editing ? 'Add Reminder' : 'Update Reminder'}
          variant={'contained'}
          color={'primary'}
          onClick={handleClick}
        />
        <ButtonMui
          variant={'contained'}
          title={'Cancel'}
          color={'secondary'}
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

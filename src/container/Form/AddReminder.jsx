import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputText, Buttons } from '../Form/Form-components';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

import './Form-components/style.scss';

const AddReminder = (props) => {
  // destructring props
  const { addNewReminder } = props;

  const [reminder, setReminder] = useState([]);
  const [dateValue, setDateValue] = useState(new Date());

  let finalDate, finalTime;

  (function formatDateTime() {
    finalDate =
      dateValue.getDate() +
      '-' +
      (dateValue.getMonth() + 1) +
      '-' +
      dateValue.getFullYear();

    finalTime =
      dateValue.getHours() +
      ':' +
      dateValue.getMinutes() +
      ' ' +
      (dateValue.getHours() <= 12 ? 'AM' : 'PM');
  })();

  const handleInputChange = (event) => {
    setReminder({
      title: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setReminder({
      ...reminder,
      date: finalDate,
      time: finalTime,
      timeStamp: dateValue,
    });
    addNewReminder(reminder);

    // reset the value;s
    setDateValue(new Date());
  };

  return (
    <form id='addReminderFormId'>
      <InputText
        name={'title'}
        type={'text'}
        placeholder={'Enter the title'}
        value={reminder.title}
        onChange={handleInputChange}
      />
      <br />
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
        <br />
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
      <br />
      <Buttons title={'Add Reminder'} color={'primary'} onClick={handleClick} />
    </form>
  );
};

// typechecking with propTypes
AddReminder.propTypes = {
  addNewReminder: PropTypes.func,
};

export default AddReminder;

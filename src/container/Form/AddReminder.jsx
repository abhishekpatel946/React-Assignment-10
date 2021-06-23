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
  const [title, setTitle] = useState('');
  const [dateValue, setDateValue] = useState(new Date());

  let finalDate, finalTime;

  const formatDateTime = () => {
    finalDate =
      dateValue.getDate() +
      '-' +
      (dateValue.getMonth() + 1) +
      '-' +
      dateValue.getFullYear();

    finalTime = dateValue.getHours() + ':' + dateValue.getMinutes();
  };

  const handleInputChange = (event) => {
    if (event.target) {
      setTitle(event.target.value);
    }
    setReminder(title);
  };

  const handleClick = (event) => {
    event.preventDefault();
    formatDateTime();
    setReminder({
      title,
      date: finalDate,
      time: finalTime,
      timeStamp: dateValue,
    });
    addNewReminder(reminder);

    setTitle('');
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
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className='dateField'
          clearable
          value={dateValue}
          placeholder='01/01/2021'
          onChange={(date) => setDateValue(date)}
          format='MM/dd/yyyy'
        />
        <br />
        <KeyboardTimePicker
          className='dateField'
          label='Masked timepicker'
          placeholder='08:00 AM'
          mask='__:__ _M'
          value={dateValue}
          onChange={(date) => setDateValue(date)}
        />
      </MuiPickersUtilsProvider>
      <br />
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

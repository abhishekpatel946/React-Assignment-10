import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputText, Buttons } from '../Form/Form-components';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

const EditReminder = (props) => {
  // destructring the props
  const { setEditing, currentReminder, updateOldReminder } = props;

  const [reminder, setReminder] = useState(currentReminder);
  const [title, setTitle] = useState('');
  const [dateValue, setDateValue] = useState(new Date());

  useEffect(() => {
    setReminder(props.currentReminder);
  }, [props]);

  let finalDate, finalTime;
  const formatDateTime = () => {
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
      ':' +
      (dateValue.getHours >= 12 ? 'PM' : 'AM');
  };

  const handleInputChange = (event) => {
    if (event.target) {
      setTitle(event.target.value);
    }
    setReminder(title);
  };

  // something is not updated title & date-time also

  const handleClick = (event) => {
    event.preventDefault();
    formatDateTime();
    setReminder({ title, date: finalDate, time: finalTime });
    updateOldReminder(reminder.id, reminder);

    setTitle('');
    setDateValue(new Date());
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  return (
    <form id='editReminderFormId'>
      <InputText
        name={'title'}
        type={'text'}
        placeholder={'Update the title'}
        value={reminder.title}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className='dateField'
          label='Masked datepicker'
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
      <Buttons
        title={'Update Reminder'}
        color={'primary'}
        onClick={handleClick}
      />
      <Buttons
        title={'Cancel'}
        color={'secondary'}
        onClick={handleCancelClick}
      />
    </form>
  );
};

// typechecking with propTypes
EditReminder.propTypes = {
  editing: PropTypes.bool,
  setEditing: PropTypes.func,
  currentReminder: PropTypes.object,
  updateOldReminder: PropTypes.func,
};

export default EditReminder;

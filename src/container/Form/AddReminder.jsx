import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputText, DateMui, Buttons, TimeMui } from '../Form/Form-components';

const AddReminder = (props) => {
  // destructring props
  const { addNewReminder } = props;
  const [reminder, setReminder] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReminder({
      ...reminder,
      [!name ? 'date' : name]: value,
      [!name ? 'time' : name]: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    addNewReminder(reminder);
    setReminder(reminder);
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
      <DateMui name='date' value={reminder.date} onChange={handleInputChange} />
      <TimeMui name='time' value={reminder.time} onChange={handleInputChange} />
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

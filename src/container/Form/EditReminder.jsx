import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputText, DateMui, Buttons, TimeMui } from '../Form/Form-components';

const EditReminder = (props) => {
  // destructring the props
  const { setEditing, currentReminder, updateOldReminder } = props;

  const [reminder, setReminder] = useState(currentReminder);

  useEffect(() => {
    setReminder(props.currentReminder);
  }, [props]);

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
    updateOldReminder(reminder.id, reminder);
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
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
      <DateMui name='date' value={reminder.date} onChange={handleInputChange} />
      <TimeMui name='time' value={reminder.time} onChange={handleInputChange} />
      <br />
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

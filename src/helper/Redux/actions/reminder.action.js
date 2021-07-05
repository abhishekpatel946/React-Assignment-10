import {
  FETCH_REMINDER,
  SET_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
} from '../types/reminder.types';

//TODO: fetch reminders
export const fetchReminders = () => {
  return {
    type: FETCH_REMINDER,
  };
};

//TODO: set reminders
export const setReminders = (reminder) => {
  if (reminder) {
    return {
      type: SET_REMINDER,
      payload: {
        id: reminder.id,
        title: reminder.title,
        timestamp: reminder.timestamp,
      },
    };
  }
};

//TODO: delete reminders
export const deleteReminders = (id) => {
  if (id) {
    return {
      type: DELETE_REMINDER,
      payload: {
        id: id,
      },
    };
  }
};

//TODO: update reminders
export const updateReminders = (id, reminder) => {
  if (id && reminder) {
    return {
      type: UPDATE_REMINDER,
      payload: {
        id: reminder.id,
        title: reminder.title,
        timestamp: reminder.timestamp,
      },
    };
  }
};

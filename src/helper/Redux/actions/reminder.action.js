import {
  DELETE_REMINDER,
  FETCH_REMINDER,
  SET_REMINDER,
  UPDATE_REMINDER,
} from '../types/reminder.types';

//TODO: fetch reminders
export const fetchReminder = (reminders = null) => {
  return {
    type: FETCH_REMINDER,
    payload: {
      reminders,
    },
  };
};
export const fetchReminderSucess = (status = false) => {
  return {
    type: FETCH_REMINDER,
    payload: {
      status: true,
    },
  };
};
export const fetchReminderFailure = (status = false) => {
  return {
    type: FETCH_REMINDER,
    payload: {
      status: true,
    },
  };
};

//TODO: set reminders
export const setReminder = (reminders = null) => {
  if (reminders) {
    return {
      type: SET_REMINDER,
      payload: {
        reminders,
      },
    };
  }
};
export const setReminderSuccess = (status = false) => {
  return {
    type: SET_REMINDER,
    payload: {
      status: true,
    },
  };
};
export const setReminderFailure = (status = false) => {
  return {
    type: SET_REMINDER,
    payload: {
      status: true,
    },
  };
};

//TODO: delete reminders
export const deleteReminder = (id = null) => {
  if (id) {
    return {
      type: DELETE_REMINDER,
      payload: {
        id,
      },
    };
  }
};

//TODO: update reminders
export const updateReminder = (id = null, reminder = null) => {
  if (id && reminder) {
    return {
      type: UPDATE_REMINDER,
      payload: {
        id,
        reminder,
      },
    };
  }
};

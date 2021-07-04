import {
  FETCH_reminders,
  FETCH_reminders_SUCCESS,
  FETCH_reminders_FAILURE,
  SET_reminders,
  SET_reminders_SUCCESS,
  SET_reminders_FAILURE,
  DELETE_reminders,
  DELETE_reminders_SUCCESS,
  DELETE_reminders_FAILURE,
  UPDATE_reminders,
  UPDATE_reminders_SUCCESS,
  UPDATE_reminders_FAILURE,
} from '../types/reminders.types';

//TODO: fetch reminderss
export const fetchreminders = (reminderss = null) => {
  return {
    type: FETCH_reminders,
    payload: {
      reminderss,
    },
  };
};

export const fetchremindersSucess = (reminderss = null) => {
  return {
    type: FETCH_reminders_SUCCESS,
    payload: {
      reminderss,
    },
  };
};

export const fetchremindersFailure = (reminderss = null) => {
  return {
    type: FETCH_reminders_FAILURE,
    payload: {
      reminderss,
    },
  };
};

//TODO: set reminderss
export const setreminders = (reminderss = null) => {
  if (reminderss) {
    return {
      type: SET_reminders,
      payload: {
        reminderss,
      },
    };
  }
};

export const setremindersSuccess = (reminderss = null) => {
  if (reminderss) {
    return {
      type: SET_reminders_SUCCESS,
      payload: {
        reminderss,
      },
    };
  }
};

export const setremindersFailure = (reminderss = null) => {
  if (reminderss) {
    return {
      type: SET_reminders_FAILURE,
      payload: {
        reminderss,
      },
    };
  }
};

//TODO: delete reminderss
export const deletereminders = (id = null) => {
  if (id) {
    return {
      type: DELETE_reminders,
      payload: {
        id,
      },
    };
  }
};

export const deleteremindersSucess = (id = null) => {
  if (id) {
    return {
      type: DELETE_reminders_SUCCESS,
      payload: {
        id,
      },
    };
  }
};

export const deleteremindersFailure = (id = null) => {
  if (id) {
    return {
      type: DELETE_reminders_FAILURE,
      payload: {
        id,
      },
    };
  }
};

//TODO: update reminderss
export const updatereminders = (id = null, reminders = null) => {
  if (id && reminders) {
    return {
      type: UPDATE_reminders,
      payload: {
        id,
        reminders,
      },
    };
  }
};

export const updateremindersSucess = (id = null, reminders = null) => {
  if (id && reminders) {
    return {
      type: UPDATE_reminders_SUCCESS,
      payload: {
        id,
        reminders,
      },
    };
  }
};

export const updateremindersFailure = (id = null, reminders = null) => {
  if (id && reminders) {
    return {
      type: UPDATE_reminders_FAILURE,
      payload: {
        id,
        reminders,
      },
    };
  }
};

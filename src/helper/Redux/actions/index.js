export const addNewReminder = (reminderId, title, timestamp) => {
  return {
    type: 'ADD_REMINDER',
    payload: {
      id: reminderId,
      title: title,
      timestamp: timestamp,
    },
  };
};

export const deleteOldReminder = (reminderId) => {
  return {
    type: 'DELETE_REMINDER',
    payload: {
      id: reminderId,
    },
  };
};

export const updateOldReminder = (reminderId, updatedReminder) => {
  return {
    type: 'UPDATE_REMINDER',
    payload: {
      id: reminderId,
      updatedReminder: updatedReminder,
    },
  };
};

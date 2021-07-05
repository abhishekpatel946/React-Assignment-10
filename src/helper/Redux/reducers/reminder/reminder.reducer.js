import {
  FETCH_REMINDER,
  SET_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
} from '../../types/reminder.types';

export const reminderInitialState = {
  // TODO: fetchReminder using watcher-saga from firestore
  reminders: [
    {
      id: '',
      title: '',
      timestamp: new Date(),
    },
  ],
};

const reminderReducer = (state = reminderInitialState, action) => {
  switch (action.type) {
    case FETCH_REMINDER:
      return {
        ...state,
        reminders: { ...action.reminders },
      };
    case SET_REMINDER:
      const { id, title, timestamp } = action.payload;
      // TODO: setQuery
      return {
        ...state,
        reminders: [
          ...state.reminder,
          {
            id: id,
            title: title,
            timestamp: timestamp,
          },
        ],
      };
    case DELETE_REMINDER: {
      const { id } = action.payload;
      // TODO: deleteQuery
      const newReminders = state.reminders.filter(
        (reminder) => reminder.id !== id
      );
      return { ...state, reminders: newReminders };
    }
    case UPDATE_REMINDER: {
      const { id, updatedReminder } = action.payload;
      // TODO: updateQuery
      const editReminders = state.reminders.map((reminder) =>
        reminder.id === id ? updatedReminder : reminder
      );
      return {
        ...state,
        reminders: editReminders,
      };
    }

    default:
      return state;
  }
};

export default reminderReducer;

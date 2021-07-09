import { createSlice } from '@reduxjs/toolkit';

export const reminderInitialState = {
  // TODO: fetchReminder using watcher-saga from firestore
  reminders: [
    {
      id: '122abcai2',
      title: 'initial testing title',
      date: 'June 28, 2021',
      time: '8:33:22 AM',
      timestamp: new Date(),
    },
  ],
};

const reminderReducer = createSlice({
  name: 'ReminderApp',
  initialState: reminderInitialState,
  reducers: {
    // TODO: get the reminder
    FETCH_REMINDER_SUCCESS(state, action) {
      return {
        ...state,
        reminders: [...action.payload],
      };
    },
    FETCH_REMINDER_FAILURE(state, action) {
      return console.error('Something Went Wrong');
    },

    // TODO: set the reminder
    SET_REMINDER_SUCCESS(state, action) {
      const { id, title, date, time, timestamp } = action.payload;
      // TODO: setQuery
      return {
        ...state,
        reminders: [
          ...state.reminder,
          {
            id: id,
            title: title,
            data: date,
            time: time,
            timestamp: timestamp,
          },
        ],
      };
    },
    SET_REMINDER_FAILURE(state, action) {
      return console.error('Something Went Wrong');
    },

    // TODO: delete the reminder
    DELETE_REMINDER_SUCCESS(state, action) {
      const { id } = action.payload;
      // TODO: deleteQuery
      const newReminders = state.reminders.filter(
        (reminder) => reminder.id !== id
      );
      return { ...state, reminders: newReminders };
    },
    DELETE_REMINDER_FAILURE(state, action) {
      return console.error('Something Went Wrong');
    },

    // TODO: update the reminder
    UPDATE_REMINDER_SUCCESS(state, action) {
      const { id, updatedReminder } = action.payload;
      // TODO: updateQuery
      const editReminders = state.reminders.map((reminder) =>
        reminder.id === id ? updatedReminder : reminder
      );
      return {
        ...state,
        reminders: editReminders,
      };
    },
    UPDATE_REMINDER_FAILURE(state, action) {
      return console.error('Something Went Wrong');
    },
  },
});

export const {
  FETCH_REMINDER_SUCCESS,
  FETCH_REMINDER_FAILURE,
  SET_REMINDER_SUCCESS,
  SET_REMINDER_FAILURE,
  DELETE_REMINDER_SUCCESS,
  DELETE_REMINDER_FAILURE,
  UPDATE_REMINDER_SUCCESS,
  UPDATE_REMINDER_FAILURE,
} = reminderReducer.actions;

export default reminderReducer.reducer;

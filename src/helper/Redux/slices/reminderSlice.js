import { createSlice } from '@reduxjs/toolkit';

const reminderSlice = createSlice({
  name: 'reminders',
  initialState: [
    {
      id: null,
      title: '',
      timestamp: '',
    },
  ],
  reducers: {
    getReminder(state) {
      return { ...state };
    },
    setReminder(state, action) {
      const reminderData = action.payload;
      return { ...state, ...reminderData };
    },
    setUpdateReminder(state, action) {
      const reminderData = action.payload;
      return { ...state, ...reminderData };
    },
    setDeleteReminder(state, action) {
      return { ...state };
    },
  },
});

export const {
  getReminder,
  setReminder,
  setUpdateReminder,
  setDeleteReminder,
} = reminderSlice.actions;

export default reminderSlice.reducer;

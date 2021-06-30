import { createSlice } from '@reduxjs/toolkit';

const reminderSlice = createSlice({
  name: 'reminders',
  initialState: [
    {
      id: 1,
      title: 'A fake title',
      timestamp: 'Wed Jun 30 2021 16:17:00 GMT+0530 (India Standard Time)',
    },
  ],
  reducers: {
    getReminder() {},
    setReminder(state, action) {
      const reminderData = action.payload;
      console.log(reminderData);
      return { ...state, ...reminderData };
    },
    updateReminder(state, action) {},
    deleteReminder(state, action) {},
  },
});

export const { getReminder, setReminder, updateReminder, deleteReminder } =
  reminderSlice.actions;

export default reminderSlice.reducer;

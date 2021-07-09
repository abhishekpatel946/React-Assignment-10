import { combineReducers } from 'redux';
import reminderReducer from './reminder/reminder.reducer';

const rootReducer = combineReducers({
  reminders: reminderReducer,
});

export default rootReducer;

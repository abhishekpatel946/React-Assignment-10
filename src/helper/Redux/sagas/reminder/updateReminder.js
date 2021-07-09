import { takeLatest } from 'redux-saga/effects';
import { UPDATE_REMINDER } from '../../types/reminder.types';
import { useDispatch } from 'react-redux';
import {
  UPDATE_REMINDER_FAILURE,
  UPDATE_REMINDER_SUCCESS,
} from '../../reducers/reminder/reminder.reducer';

// TODO: action calling the API
function* UpdateReminders(payload) {
  const dispatch = useDispatch();
  try {
    // TODO: create a reminder & store into firestore
    yield dispatch({ type: UPDATE_REMINDER_SUCCESS });
  } catch (err) {
    console.log(err);
    yield dispatch({ type: UPDATE_REMINDER_FAILURE });
  }
}

// TODO: watcher saga
export function* waitForUpdateReminders() {
  yield takeLatest(UPDATE_REMINDER, UpdateReminders);
}

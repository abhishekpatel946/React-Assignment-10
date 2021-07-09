import { takeLatest } from 'redux-saga/effects';
import { DELETE_REMINDER } from '../../types/reminder.types';
import { useDispatch } from 'react-redux';
import {
  DELETE_REMINDER_FAILURE,
  DELETE_REMINDER_SUCCESS,
} from '../../reducers/reminder/reminder.reducer';

// TODO: action calling the API
function* DeleteReminders(payload) {
  const dispatch = useDispatch();

  try {
    // TODO: create a reminder & store into firestore
    yield dispatch({ type: DELETE_REMINDER_SUCCESS });
  } catch (err) {
    console.log(err);
    yield dispatch({ type: DELETE_REMINDER_FAILURE });
  }
}

// TODO: watcher saga
export function* waitForDeleteReminders() {
  yield takeLatest(DELETE_REMINDER, DeleteReminders);
}

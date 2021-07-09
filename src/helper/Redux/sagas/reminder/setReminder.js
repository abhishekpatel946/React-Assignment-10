import { takeLatest } from 'redux-saga/effects';
import { SET_REMINDER } from '../../types/reminder.types';
import { useDispatch } from 'react-redux';
import {
  FETCH_REMINDER_SUCCESS,
  SET_REMINDER_FAILURE,
} from '../../reducers/reminder/reminder.reducer';

// TODO: action calling the API
function* SetReminders(payload) {
  const dispatch = useDispatch();
  try {
    // TODO: create a reminder & store into firestore
    yield dispatch({ type: FETCH_REMINDER_SUCCESS });
  } catch (err) {
    console.log(err);
    yield dispatch({ type: SET_REMINDER_FAILURE });
  }
}

// TODO: watcher saga
export function* waitForSetReminders() {
  yield takeLatest(SET_REMINDER, SetReminders);
}

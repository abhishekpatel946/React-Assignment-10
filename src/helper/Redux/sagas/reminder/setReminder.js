import { takeLatest, put } from 'redux-saga/effects';
import { SET_REMINDER } from '../../types/reminder.types';

// TODO: action calling the API
function* setReminders() {
  try {
    console.log();
    // TODO: create a reminder & store into firestore
    yield put(setReminders());
  } catch (error) {
    console.log(error);
  }
}

// TODO: watcher saga
export function* waitForSetReminders() {
  yield takeLatest(SET_REMINDER, setReminders);
}

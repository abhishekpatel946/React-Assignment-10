import { takeLatest, put } from 'redux-saga/effects';
import { DELETE_REMINDER } from '../../types/reminder.types';

// TODO: action calling the API
function* deleteReminders() {
  try {
    // TODO: create a reminder & store into firestore
    yield put(deleteReminders());
  } catch (error) {
    console.log(error);
  }
}

// TODO: watcher saga
export function* waitForDeleteReminders() {
  yield takeLatest(DELETE_REMINDER, deleteReminders);
}

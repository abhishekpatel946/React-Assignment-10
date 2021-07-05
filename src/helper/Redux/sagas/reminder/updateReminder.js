import { takeLatest, put } from 'redux-saga/effects';
import { UPDATE_REMINDER } from '../../types/reminder.types';

// TODO: action calling the API
function* updateReminders() {
  try {
    // TODO: create a reminder & store into firestore
    yield put(updateReminders());
  } catch (error) {
    console.log(error);
  }
}

// TODO: watcher saga
export function* waitForUpdateReminders() {
  yield takeLatest(UPDATE_REMINDER, updateReminders);
}

import { takeLatest } from 'redux-saga/effects';
import { getReminder } from '../slices/reminderSlice';
import { handleGetReminder } from './handlers/reminder';

export function* watcherSaga() {
  yield takeLatest(getReminder.type, handleGetReminder);
}

import { takeLatest } from 'redux-saga/effects';
import {
  getReminder,
  setReminder,
  setDeleteReminder,
  setUpdateReminder,
} from '../slices/reminderSlice';
import {
  handleGetReminder,
  handleSetReminder,
  handleDeleteReminder,
  handleUpdateReminder,
} from './handlers';

export function* watcherSaga() {
  yield takeLatest(getReminder.type, handleGetReminder);
  yield takeLatest(setReminder.type, handleSetReminder);
  yield takeLatest(setDeleteReminder.type, handleDeleteReminder);
  yield takeLatest(setUpdateReminder.type, handleUpdateReminder);
}

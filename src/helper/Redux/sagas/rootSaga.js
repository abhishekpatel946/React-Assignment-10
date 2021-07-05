import { all } from '@redux-saga/core/effects';
import {
  waitForFetchReminders,
  waitForSetReminders,
  waitForDeleteReminders,
  waitForUpdateReminders,
} from './reminder';

export default function* rootSaga() {
  yield all([
    waitForFetchReminders(),
    waitForSetReminders(),
    waitForDeleteReminders(),
    waitForUpdateReminders(),
  ]);
}

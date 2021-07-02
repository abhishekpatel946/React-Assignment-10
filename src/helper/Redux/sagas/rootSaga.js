import { all } from '@redux-saga/core/effects';
import { waitForFetchReminders } from './reminder/reminder.saga';

export default function* rootSaga() {
  yield all([waitForFetchReminders()]);
}

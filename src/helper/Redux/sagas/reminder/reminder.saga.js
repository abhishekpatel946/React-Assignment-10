import { takeLatest, call, put } from 'redux-saga/effects';
import { setReminder } from '../../actions/reminder.action';
import reminderService from '../../service/reminders.service';
import { FETCH_REMINDER } from '../../types/reminder.types';

// TODO: action calling the API
function* fetchReminder() {
  try {
    const reminders = yield call(reminderService.getAllReminders);

    yield put(setReminder(reminders));
  } catch (error) {
    console.log(error);
  }
}

// TODO: watcher saga
export function* waitForFetchReminders() {
  yield takeLatest(FETCH_REMINDER, fetchReminder);
}

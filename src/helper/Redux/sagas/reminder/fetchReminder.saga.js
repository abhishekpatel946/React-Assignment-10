import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_REMINDER } from '../../types/reminder.types';
import { GetAllReminders } from '../../service/getReminders.service';
import { GetDataFromSnapshot } from '../../../Utils/GetDataFromSnapshot';

// TODO: action calling the API
function* fetchReminders() {
  try {
    const reminders = yield call(GetAllReminders);
    const resultDoc = GetDataFromSnapshot(reminders);
    resultDoc
      .then((res) => {
        put(fetchReminders(res));
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
}

// TODO: watcher saga
export function* waitForFetchReminders() {
  yield takeLatest(FETCH_REMINDER, fetchReminders);
}

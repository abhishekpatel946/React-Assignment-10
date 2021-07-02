import { takeLatest, call, put } from 'redux-saga/effects';
import {
  setReminder,
  setReminderSuccess,
  setReminderFailure,
  fetchReminderSucess,
  fetchReminderFailure,
} from '../../actions/reminder.action';
import {
  FETCH_REMINDER,
  FETCH_REMINDER_FAILURE,
  FETCH_REMINDER_SUCCESS,
} from '../../types/reminder.types';
import { GetAllReminders } from '../../service/reminders.service';
import { GetDataFromSnapshot } from '../../../Utils/GetDataFromSnapshot';

// TODO: action calling the API
function* fetchReminder() {
  try {
    const reminders = yield call(GetAllReminders);
    console.log(`reminders =>> ${reminders}`); // reminders =>> [object Object]

    const resultDoc = GetDataFromSnapshot(reminders);

    resultDoc
      .then((data) => {
        console.log(`resultDoc =>> ${resultDoc}`); // resultDoc =>> [object Promise]
        console.log(`data =>> ${data}`);
        // data =>> function () {
        //   i.Zl(), r.cs.ws(function () {
        //     return Pr(r.q_, o);
        //   });
        // }

        // data.json();  // Unhandled Rejection (TypeError): data.json is not a function
      })
      .then((response) => console.log(`response =>> ${response}`)); // response =>> undefined

    yield put(setReminder(reminders));
    yield put(setReminderSuccess(true));
  } catch (error) {
    yield put(setReminderFailure(true));
    console.log(error);
  }
}

// TODO: watcher saga
export function* waitForFetchReminders() {
  yield takeLatest(FETCH_REMINDER, fetchReminder);
  yield takeLatest(FETCH_REMINDER_SUCCESS, fetchReminderSucess);
  yield takeLatest(FETCH_REMINDER_FAILURE, fetchReminderFailure);
}

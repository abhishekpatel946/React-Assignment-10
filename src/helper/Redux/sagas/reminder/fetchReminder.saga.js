import { takeLatest, call } from 'redux-saga/effects';
import { FETCH_REMINDER } from '../../types/reminder.types';
import { GetAllReminders } from '../../service/getReminders.service';
import { GetDataFromSnapshot } from '../../../Utils/GetDataFromSnapshot';
import { useDispatch } from 'react-redux';
import {
  FETCH_REMINDER_FAILURE,
  FETCH_REMINDER_SUCCESS,
} from '../../reducers/reminder/reminder.reducer';

// TODO: action calling the API
function* FetchReminder() {
  const dispatch = useDispatch();
  try {
    // fetch date from API(firestore) endpoint
    const reminders = yield call(GetAllReminders);

    // get the data from JSON(snapshot)
    const resultDoc = GetDataFromSnapshot(reminders);

    // fulfilled the promise return and then grab the data inside
    yield resultDoc.then((res) => {
      dispatch({ type: FETCH_REMINDER_SUCCESS, payload: res });
    });
  } catch (err) {
    console.log(err);
    yield dispatch({ type: FETCH_REMINDER_FAILURE, payload: err });
  }
}

// TODO: watcher saga
export function* waitForFetchReminders() {
  yield takeLatest(FETCH_REMINDER, FetchReminder);
}

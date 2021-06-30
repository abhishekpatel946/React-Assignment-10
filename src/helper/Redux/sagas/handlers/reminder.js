import { call, put } from 'redux-saga/effects';
import { setReminder } from '../../slices/reminderSlice';
import RequestGetReminder from '../requests/reminder';

export function* handleGetReminder(action) {
  try {
    const response = yield call(RequestGetReminder);
    console.log(response);
    debugger;

    const { data } = response;
    yield put(setReminder({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

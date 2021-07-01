import { call, put } from 'redux-saga/effects';
import { setReminder } from '../../slices/reminderSlice';
import RequestSetReminder from '../requests/setReminder';

export function* handleSetReminder(action) {
  try {
    const response = yield call(RequestSetReminder);
    console.log(response);

    const { data } = response;
    yield put(setReminder({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

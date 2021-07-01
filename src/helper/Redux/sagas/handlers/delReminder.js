import { call, put } from 'redux-saga/effects';
import { setDeleteReminder } from '../../slices/reminderSlice';
import RequestDeleteReminder from '../requests/delReminder';

export function* handleDeleteReminder(action) {
  try {
    const response = yield call(RequestDeleteReminder);
    console.log(response);
    debugger;

    const { data } = response;
    yield put(setDeleteReminder({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

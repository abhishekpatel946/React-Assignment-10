import { call, put } from 'redux-saga/effects';
import { setUpdateReminder } from '../../slices/reminderSlice';
import RequestUpdateReminder from '../requests/updateReminder';

export function* handleUpdateReminder(action) {
  try {
    const response = yield call(RequestUpdateReminder);
    console.log(response);
    debugger;

    const { data } = response;
    yield put(setUpdateReminder({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

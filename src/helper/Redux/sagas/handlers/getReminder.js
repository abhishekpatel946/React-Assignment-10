import { call, put } from 'redux-saga/effects';
import { setReminder } from '../../slices/reminderSlice';
import RequestGetReminder from '../requests/getReminder';

export function* handleGetReminder(action) {
  // using API request call
  try {
    const response = yield call(RequestGetReminder);
    console.log(`handlerReminder: response =>> ${response}`);

    const { data } = response;
    console.log(`handlerReminder: data =>> ${data}`);

    yield put(setReminder({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

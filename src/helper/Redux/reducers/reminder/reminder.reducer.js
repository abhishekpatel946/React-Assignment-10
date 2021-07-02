import {
  DELETE_REMINDER,
  FETCH_REMINDER,
  SET_REMINDER,
  UPDATE_REMINDER,
} from '../../types/reminder.types';

export const reminderInitialState = [];

const reminderReducer = (state = reminderInitialState, action) => {
  switch (action.type) {
    case FETCH_REMINDER:
      return [...state];
    case SET_REMINDER:
      return [...action.payload];
    case DELETE_REMINDER:
      return state;
    case UPDATE_REMINDER:
      return state;
    default:
      return state;
  }
};

export default reminderReducer;

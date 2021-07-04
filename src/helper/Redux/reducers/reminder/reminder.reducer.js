import {
  FETCH_REMINDER,
  FETCH_REMINDER_SUCCESS,
  FETCH_REMINDER_FAILURE,
  SET_REMINDER,
  SET_REMINDER_SUCCESS,
  SET_REMINDER_FAILURE,
  DELETE_REMINDER,
  DELETE_REMINDER_SUCCESS,
  DELETE_REMINDER_FAILURE,
  UPDATE_REMINDER,
  UPDATE_REMINDER_SUCCESS,
  UPDATE_REMINDER_FAILURE,
} from '../../types/reminder.types';

export const reminderInitialState = [
  {
    isLoading: false,
    data: null,
    error: null,
  },
];

const reminderReducer = (state = reminderInitialState, action) => {
  switch (action.type) {
    case FETCH_REMINDER:
    case SET_REMINDER:
    case DELETE_REMINDER:
    case UPDATE_REMINDER:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };

    case FETCH_REMINDER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: action.reminders,
        error: null,
      };

    case SET_REMINDER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: action.reminders,
        error: null,
      };

    case DELETE_REMINDER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: action.reminders.filter(
          (reminder) => reminder.id !== action.reminders.id
        ),
        error: null,
      };

    case UPDATE_REMINDER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: action.reminders.map((reminder) => {
          if (action.reminders.id === reminder.id)
            return { ...action.reminders, ...reminder };
        }),
        error: null,
      };

    case FETCH_REMINDER_FAILURE:
    case SET_REMINDER_FAILURE:
    case DELETE_REMINDER_FAILURE:
    case UPDATE_REMINDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: true,
      };

    default:
      return state;
  }
};

export default reminderReducer;

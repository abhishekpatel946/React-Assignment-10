import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../helper/AuthProvider/AuthProvider';
import { db } from '../Firebase/firebaseConfig';
import firebase from 'firebase/app';
import { GetFromFirestore } from '../../Utils/dbService';

// initial data
const initialData = {
  reminders: GetFromFirestore(),
};

const userReducers = (state = initialData, action) => {
  switch (action.type) {
    // add a remider
    case 'ADD_REMINDER': {
      const { id, data } = action.payload;
      return {
        ...state,
        reminders: [
          ...state.reminders,
          {
            id: id,
            ...data,
          },
        ],
      };
    }
    // delete a reminder

    default:
      return state;
  }
};

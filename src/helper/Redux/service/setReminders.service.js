import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { db } from '../../Firebase/firebase';

export const GetAllReminders = async (payload) => {
  const { currentUser } = useContext(AuthContext);
  return await db
    .collection('users')
    .doc(currentUser.uid)
    .collection('reminders')
    .add({
      id: nanoid(),
      title: payload.title,
      date: payload.data,
      time: payload.time,
      timestamp: payload.timestamp,
    });
};

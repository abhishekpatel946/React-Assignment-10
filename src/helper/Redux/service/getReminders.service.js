import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { db } from '../../Firebase/firebase';

export const GetAllReminders = async () => {
  const { currentUser } = useContext(AuthContext);
  return await db
    .collection('users')
    .doc(currentUser.uid)
    .collection('reminders');
};

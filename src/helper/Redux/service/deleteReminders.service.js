import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { db } from '../../Firebase/firebase';

export const GetAllReminders = async (payload) => {
  const { currentUser } = useContext(AuthContext);
  const result = await db
    .collection('users')
    .doc(currentUser.uid)
    .collection('reminders')
    .where('id', '==', payload.id)
    .get();

  return await result.forEach((element) => {
    element.ref.delete();
  });
};

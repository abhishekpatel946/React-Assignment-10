import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { db } from '../../../Firebase/firebase';

const RequestDeleteReminder = async (id) => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  // delete entry from firestore
  try {
    if (currentUser) {
      const result = await db
        .collection('users')
        .doc(userId)
        .collection('reminders')
        .where('id', '==', id)
        .get();
      await result.forEach((element) => {
        element.ref.delete();
        console.log('Document successfully deleted!');
      });
    }
  } catch (error) {
    return;
  }
};

export default RequestDeleteReminder;

import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { db } from '../../../Firebase/firebase';
import { nanoid } from 'nanoid';

const RequestUpdateReminder = async (reminder) => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  // update the entry into firestore
  try {
    if (currentUser) {
      await db
        .collection('users')
        .doc(userId)
        .collection('reminders')
        .add({
          id: nanoid(),
          title: reminder.title,
          timestamp: reminder.timestamp,
        })
        .then(() => {
          console.log('Document added succesfully!');
        });
    }
  } catch (error) {
    alert(error);
  }
};

export default RequestUpdateReminder;

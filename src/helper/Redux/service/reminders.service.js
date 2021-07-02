import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { db } from '../../Firebase/firebase';

function Service() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;
  const [data, setData] = useState([]);

  const getAllReminders = () => {
    db.collection('users')
      .doc(userId)
      .collection('reminders')
      .onSnapshot((docs) => {
        const currentState = [];
        docs.forEach((doc) => {
          currentState.push(doc.data());
        });
        setData(currentState);
      })
      .then(() => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    getAllReminders,
  };
}

const reminderService = Service();

export default reminderService;

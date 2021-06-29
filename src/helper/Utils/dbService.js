import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../helper/AuthProvider/AuthProvider';
import { db } from '../Firebase/firebaseConfig';

const Context = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;
  return { userId, currentUser };
};

// get the data from fireStore db
export function GetFromFirestore() {
  const { userId, currentUser } = Context();
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      if (currentUser) {
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
            console.log('Document retrieved successfully!');
          });
      }
    } catch (error) {
      return;
    }
  }, [currentUser, userId]);
  return data;
}

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../helper/AuthProvider/AuthProvider';
import { db } from '../Firebase/firebaseConfig';

// get the data from fireStore db
export const GetFromFirestore = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;
  const [data, setData] = useState([]);

  useEffect(() => {
    const subscription = async () => {
      try {
        if (currentUser) {
          await db
            .collection('users')
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
    };
    return {
      subscription,
    };
  }, [currentUser, userId]);
  return data;
};

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../helper/AuthProvider/AuthProvider';
import { db } from '../../helper/firebase/firebaseConfig';

export function GetFromFirestore() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      if (currentUser) {
        db.collection('data')
          .doc('reminders')
          .collection(userId)
          .onSnapshot((docs) => {
            const currentState = [];
            docs.forEach((doc) => {
              currentState.push(doc.data());
            });
            setData(currentState);
          });
      }
    } catch (error) {
      return undefined;
    }
  }, [userId, currentUser]);
  return data;
}

// set the data into fireStore db
export function SetIntoFirestore(id, title, timestamp) {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  useEffect(() => {
    try {
      if (currentUser) {
        db.collection('data').doc('reminders').collection(userId).set({
          id: id,
          title: title,
          timestamp: timestamp,
        });
      }
    } catch (error) {
      return undefined;
    }
  }, [id, title, timestamp, userId, currentUser]);
}

// set the initial value for new user
export function SetNewUserIntoFireStore() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  useEffect(() => {
    try {
      if (currentUser) {
        db.collection('data').doc('reminders').collection(userId).set({
          id: null,
          title: null,
          timestamp: null,
        });
      }
    } catch (error) {
      return undefined;
    }
  }, [currentUser, userId]);
}

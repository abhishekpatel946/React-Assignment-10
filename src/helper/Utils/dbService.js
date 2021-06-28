import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../helper/AuthProvider/AuthProvider';
import { db } from '../Firebase/firebaseConfig';
import firebase from 'firebase/app';

const Context = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;
  return { userId, currentUser };
};

// get the data from fireStore db
export function GetFromFirestore() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;
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
      return undefined;
    }
  }, [userId, currentUser]);
  return data;
}

// set the data into fireStore db
export function SetIntoFirestore(id, title) {
  const { userId, currentUser } = Context();

  try {
    if (currentUser) {
      db.collection('users')
        .doc(userId)
        .collection('reminders')
        .add({
          id: id,
          title: title,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          console.log('Document added succesfully!');
        });
    }
  } catch (error) {
    return undefined;
  }
}

// set the initial value for new user
export function SetNewUserIntoFirestore(fname, lname, email) {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  try {
    if (currentUser) {
      db.collection('users')
        .doc(userId)
        .collection(userId)
        .add({
          firstname: fname,
          lastname: lname,
          email: email,
          uid: userId,
        })
        .doc('reminders')
        .then(() => {
          console.log('User info added successfully!');
        });
    }
  } catch (error) {
    return undefined;
  }
}

// update the fireStore doc
export function UpdateFirestoreDoc(title, date, time, timestamp) {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  try {
    if (currentUser) {
      db.collection('users')
        .doc(userId)
        .collection('reminders')
        .update({
          title: title,
          date: date,
          time: time,
          timestamp: timestamp,
        })
        .then(() => {
          console.log('Document Updated successfully!');
        });
    }
  } catch (error) {
    return undefined;
  }

  return GetFromFirestore();
}

// delete the fireStore doc
export function DeleteFirestoreDoc() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  try {
    if (currentUser) {
      db.collection('users')
        .doc(userId)
        .collection('reminders')
        .delete()
        .then(() => {
          console.log('Document successfully deleted!');
        });
    }
  } catch (error) {
    return undefined;
  }
}

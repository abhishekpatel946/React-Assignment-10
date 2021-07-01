import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../helper/AuthProvider/AuthProvider';
import { db } from '../Firebase/firebase';

// get the data from fireStore db
export const GetFromFirestore = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await db
        .collection('users')
        .doc(userId)
        .collection('reminders');
      request.onSnapshot((docs) => {
        const currentState = [];
        docs.forEach((doc) => {
          currentState.push(doc.data());
        });
        setData(currentState);
        console.log(currentState);
      });
      return request;
    }
    fetchData();
  }, [userId, currentUser]);

  console.log(`dbService: data =>> ${data}`);
  debugger;

  return data;
};

import { GetFromFirestore } from '../../../Utils/dbService';
import moment from 'moment';

const RequestGetReminder = () => {
  // Get the data from firestore in RealTime
  const data = GetFromFirestore();
  console.log(data);
  debugger;

  // initial reminder State Data
  const initialState = [];
  data &&
    data.map((doc) => {
      return initialState.push({
        id: doc.id,
        title: doc.title,
        timestamp: doc.timestamp.toDate(),
        date: moment(doc.timestamp.toDate()).format('LL'),
        time: moment(doc.timestamp.toDate()).format('LT'),
      });
    });
  console.log(initialState);
  debugger;

  return initialState;
};

export default RequestGetReminder;

import React, { useContext, useEffect, useState } from 'react';
import { PrimarySearchAppBar } from '../AppBar';
import { FormReminder } from '../Form';
import { filterByDateTime } from '../../helper/Utils/filterByDateTime';
import { getModalStyle } from './getModalStyle';
import { makeStyles } from '@material-ui/core/styles';
import { ReminderTabs } from '../Table';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
import { GetFromFirestore } from '../../helper/Utils/dbService';
import moment from 'moment';
import { AuthContext } from '../../helper/AuthProvider/AuthProvider';
import './style.scss';
import { db } from '../../helper/Firebase/firebaseConfig';
import { nanoid } from 'nanoid';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '20%',
    backgroundColor: theme.palette.background.default,
    alignItems: 'center',
    border: '1px solid #000',
    boxShadow: theme.shadows[12],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
}));

const Home = () => {
  let { currentUser } = useContext(AuthContext);
  let userId = currentUser.uid;

  // Get the data from firestore in RealTime
  const data = GetFromFirestore();

  // initial Form State Data
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
  // console.log(initialState);

  // Setting state
  const [allReminders, setAllReminders] = useState(initialState);
  const [pastReminders, setPastReminder] = useState([]);
  const [upcomingReminders, setUpcomingReminders] = useState([]);
  const [currentReminder, setCurrentReminder] = useState(initialState);
  const [editing, setEditing] = useState(false);

  // set initialState as allReminder
  useEffect(() => {
    setAllReminders(initialState);
  }, []);
  console.log(allReminders);

  // watcher for filter(past & future) the all the reminders
  useEffect(() => {
    filterByDateTime(allReminders, setPastReminder, setUpcomingReminders);
  }, [allReminders]);

  // CRUD operations
  const addNewReminder = (reminder) => {
    console.log(reminder);
    try {
      if (currentUser) {
        db.collection('users')
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

  const deleteOldReminder = async (id) => {
    setEditing(false);
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

  const updateOldReminder = async (id, updatedReminder) => {
    setEditing(false);
    console.log(updatedReminder);
    try {
      if (currentUser) {
        const result = await db
          .collection('users')
          .doc(userId)
          .collection('reminders')
          .where('id', '==', id)
          .get();
        await result.forEach((element) => {
          element.ref.update({
            title: updatedReminder.title,
            date: updatedReminder.date,
            time: updatedReminder.time,
            timestamp: updatedReminder.timestamp,
          });
          console.log('Document Updated successfully!');
        });
      }
    } catch (error) {
      return;
    }
  };

  const editRow = (reminder) => {
    setOpen(true);
    setEditing(true);
    setCurrentReminder({
      id: reminder.id,
      title: reminder.title,
      date: reminder.date,
      time: reminder.time,
      timestamp: reminder.timestamp,
    });
  };

  // modalHandles
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
  };

  // modal body
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CancelIcon className='close-icon' onClick={handleClose} />
      <div>
        <FormReminder
          editing={editing}
          setEditing={setEditing}
          currentReminder={currentReminder}
          updateOldReminder={updateOldReminder}
          setOpen={setOpen}
          addNewReminder={addNewReminder}
        />
      </div>
    </div>
  );

  return (
    <div className='App'>
      <div className='App-header'>
        <PrimarySearchAppBar handleOpen={handleOpen} />
      </div>
      <div className='home-container'>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'>
          {body}
        </Modal>
        <div className='form-container'></div>
        <div className='table-container'>
          <ReminderTabs
            allReminders={!allReminders ? [] : allReminders}
            pastReminders={!pastReminders ? [] : pastReminders}
            upcomingReminders={!upcomingReminders ? [] : upcomingReminders}
            editRow={editRow}
            deleteOldReminder={deleteOldReminder}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

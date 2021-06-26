import React, { useEffect, useState } from 'react';
import { PrimarySearchAppBar } from '../AppBar';
import { FormReminder } from '../Form';
import { filterByDateTime } from './fileterByDateTime';
import { getModalStyle } from './getModalStyle';
import { makeStyles } from '@material-ui/core/styles';
import { nanoid } from 'nanoid';
import { ReminderTabs } from '../Table';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
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
  // initial Form State Data
  const initialFormState = {
    id: null,
    title: '',
    date: '',
    time: '',
    timeStamp: '',
  };

  // Setting state
  const [allReminders, setAllReminders] = useState([]);
  const [pastReminders, setPastReminder] = useState([]);
  const [upcomingReminders, setUpcomingReminders] = useState([]);
  const [currentReminder, setCurrentReminder] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // write a cron job for filter(past & future) the all the reminders
  useEffect(() => {
    filterByDateTime(allReminders, setPastReminder, setUpcomingReminders);
  }, [allReminders]);

  // CRUD operations
  const addNewReminder = (reminder) => {
    if (reminder.title && reminder.date && reminder.time) {
      reminder.id = nanoid();
      reminder.dateTimestamp = new Date().getTime();
      setAllReminders([...allReminders, reminder]);
    }
  };

  const deleteOldReminder = (id) => {
    setEditing(false);
    setAllReminders(allReminders.filter((reminder) => reminder.id !== id));
  };

  const updateOldReminder = (id, updatedReminder) => {
    setEditing(false);
    setAllReminders(
      allReminders.map((reminder) =>
        reminder.id === id ? updatedReminder : reminder
      )
    );
  };

  const editRow = (reminder) => {
    setOpen(true);
    setEditing(true);
    setCurrentReminder({
      id: reminder.id,
      title: reminder.title,
      date: reminder.date,
      time: reminder.time,
      timeStamp: reminder.timeStamp,
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

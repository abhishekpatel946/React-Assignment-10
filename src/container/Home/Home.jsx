import React, { useEffect, useState } from 'react';
import { AddReminder, EditReminder } from '../Form';
import { Buttons } from '../Form/Form-components';
import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import { ReminderTable } from '../Table';
import { getModalStyle } from './getModalStyle';
import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '@material-ui/core/Modal';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '20%',
    backgroundColor: theme.palette.background.default,
    alignItems: 'center',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
    let todayDate = new Date();

    // get the current date
    const currDate = todayDate.getDate();
    const currMonth = todayDate.getMonth() + 1;
    const currYear = todayDate.getFullYear();

    // get the current time
    const currHours = todayDate.getHours();
    const currMin = todayDate.getMinutes();

    // filter the past reminders
    const past = allReminders.filter((d) => {
      const hours = d.timeStamp.getHours();
      const minutes = d.timeStamp.getMinutes();
      const date = d.timeStamp.getDate();
      const month = d.timeStamp.getMonth() + 1;
      const year = d.timeStamp.getFullYear();

      if (year <= currYear) {
        if (month <= currMonth) {
          if (date <= currDate) {
            if (hours <= currHours) {
              if (minutes <= currMin) {
                return d;
              }
              // if minutes is bigger than currMin
              else {
                if (year <= currYear) {
                  if (month <= currMonth) {
                    if (date <= currDate) {
                      if (hours < currHours) {
                        return d;
                      }
                    }
                  }
                }
              }
            }
            // if hours is bigger than currHours
            else {
              if (year <= currYear) {
                if (month <= currMonth) {
                  if (date < currDate) {
                    return d;
                  }
                }
              }
            }
          }
          // if date is bigger than currDate
          else {
            if (year <= currYear) {
              if (month < currMonth) {
                return d;
              }
            }
          }
        }
        // if month is bigger than currMonth
        else {
          if (year < currYear) {
            return d;
          }
        }
      }
    });

    // filter the future reminders
    const future = allReminders.filter((d) => {
      const hours = d.timeStamp.getHours();
      const minutes = d.timeStamp.getMinutes();
      const date = d.timeStamp.getDate();
      const month = d.timeStamp.getMonth() + 1;
      const year = d.timeStamp.getFullYear();

      if (year >= currYear) {
        if (month >= currMonth) {
          if (date >= currDate) {
            if (hours >= currHours) {
              if (minutes > currMin) {
                return d;
              }
              // if minutes is bigger than currMin
              else {
                if (year >= currYear) {
                  if (month >= currMonth) {
                    if (date >= currDate) {
                      if (hours > currHours) {
                        return d;
                      }
                    }
                  }
                }
              }
            }
            // if hours is bigger than currHours
            else {
              if (year >= currYear) {
                if (month >= currMonth) {
                  if (date > currDate) {
                    return d;
                  }
                }
              }
            }
          }
          // if date is bigger than currDate
          else {
            if (year >= currYear) {
              if (month > currMonth) {
                return d;
              }
            }
          }
        }
        // if month is bigger than currMonth
        else {
          if (year > currYear) {
            return d;
          }
        }
      }
    });

    // set the past & future reminders
    setPastReminder(past);
    setUpcomingReminders(future);
  }, [allReminders]);

  // CRUD operations
  const addNewReminder = (reminder) => {
    if (reminder.title && reminder.date && reminder.time) {
      reminder.id = nanoid();
      reminder.dateTimestamp = new Date().getTime();
      setAllReminders([...allReminders, reminder]);
    }
    document.getElementById('addReminderFormId').reset();
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
    document.getElementById('editReminderFormId').reset();
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
        {editing ? (
          <EditReminder
            editing={editing}
            setEditing={setEditing}
            currentReminder={currentReminder}
            updateOldReminder={updateOldReminder}
          />
        ) : (
          <AddReminder addNewReminder={addNewReminder} />
        )}
      </div>
    </div>
  );

  return (
    <div className='home-container'>
      {editing ? (
        <Buttons
          title={'Update Reminder'}
          color={'secondary'}
          onClick={handleOpen}
        />
      ) : (
        <Buttons
          title={'Add Reminder'}
          color={'primary'}
          onClick={handleOpen}
        />
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {body}
      </Modal>

      <div className='form-container'>
        {/* {editing ? (
          <EditReminder
            editing={editing}
            setEditing={setEditing}
            currentReminder={currentReminder}
            updateOldReminder={updateOldReminder}
          />
        ) : (
          <AddReminder addNewReminder={addNewReminder} />
        )} */}
      </div>
      <div className='table-container'>
        <ReminderTable
          allReminders={!allReminders ? [] : allReminders}
          pastReminders={!pastReminders ? [] : pastReminders}
          upcomingReminders={!upcomingReminders ? [] : upcomingReminders}
          editRow={editRow}
          deleteOldReminder={deleteOldReminder}
        />
      </div>
    </div>
  );
};

export default Home;

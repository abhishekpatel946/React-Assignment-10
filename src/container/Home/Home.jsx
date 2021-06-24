import React, { useEffect, useState } from 'react';
import { AddReminder, EditReminder } from '../Form';
import { nanoid } from 'nanoid';
import { ReminderTable } from '../Table';

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

      console.log('');
      console.log('past reminder', year, month, date, hours, minutes);
      console.log(
        'current reminder',
        currYear,
        currMonth,
        currDate,
        currHours,
        currMin
      );

      if (year <= currYear) {
        if (month <= currMonth) {
          if (date <= currDate) {
            if (hours <= currHours) {
              if (minutes < currMin) {
                return d;
              }
            }
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

      console.log('');
      console.log('future reminder', year, month, date, hours, minutes);
      console.log(
        'current reminder',
        currYear,
        currMonth,
        currDate,
        currHours,
        currMin
      );

      if (year >= currYear) {
        if (month >= currMonth) {
          if (date >= currDate) {
            if (hours >= currHours) {
              if (minutes >= currMin) {
                return d;
              }
            }
          }
        }
      }
    });

    // log
    console.log('past', past);
    console.log('future', future);

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
    setEditing(true);
    setCurrentReminder({
      id: reminder.id,
      title: reminder.title,
      date: reminder.date,
      time: reminder.time,
      timeStamp: reminder.timeStamp,
    });
  };

  return (
    <div>
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
      <div>
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

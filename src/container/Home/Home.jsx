import React, { useEffect, useState } from 'react';
import { AddReminder, EditReminder } from '../Form';
import { ReminderTable } from '../Table';

const Home = () => {
  // initial Form State Data
  const initialFormState = {
    id: null,
    title: '',
    dateTime: '',
  };

  // Setting state
  // const [passReminders, setPastReminder] = useState([]);
  // const [upcomingReminders, setUpcomingReminders] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [currentReminder, setCurrentReminder] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // filter the reminders based on date-time
  useEffect(() => {
    console.log('filetering...');
    const past = reminders.filter((event) => console.log(event.dateTime));
    console.log(past);
  }, [reminders]);

  // CRUD operations
  const addNewReminder = (reminder) => {
    if (reminder.title && reminder.dateTime) {
      reminder.id = new Date().getTime();
      setReminders([...reminders, reminder]);
    }
    document.getElementById('addReminderFormId').reset();
  };

  const deleteOldReminder = (id) => {
    setEditing(false);
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const updateOldReminder = (id, updatedReminder) => {
    setEditing(false);
    setReminders(
      reminders.map((reminder) =>
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
      dateTime: reminder.dateTime,
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
          reminders={!reminders ? [] : reminders}
          editRow={editRow}
          deleteOldReminder={deleteOldReminder}
        />
      </div>
    </div>
  );
};

export default Home;

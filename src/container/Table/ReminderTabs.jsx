import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TableMui from './TableMui';
import { allTabProps } from './allTabProps';
import { TabPanel } from './TabPanel';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 100,
    padding: '0px',
  },
  root: {
    flexGrow: 1,
    width: '100%',
    padding: '0px',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ReminderTabs = (props) => {
  // destructring props
  const {
    editRow,
    deleteOldReminder,
    allReminders,
    pastReminders,
    upcomingReminders,
  } = props;

  // Mui classes
  const classes = useStyles();

  // tab swithching value
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // JSON for reminder tab-tables
  const reminderTablesData = {
    editRow: editRow,
    deleteOldReminder: deleteOldReminder,

    allReminders: {
      title: 'All Reminders',
      reminders: allReminders,
    },
    pastReminders: {
      title: 'Past Reminders',
      reminders: pastReminders,
    },
    upcomingReminders: {
      title: 'Upcoming Reminders',
      reminders: upcomingReminders,
    },
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'>
          <Tab label='All Reminders' {...allTabProps(0)} />
          <Tab label='Past Reminders' {...allTabProps(1)} />
          <Tab label='Upcoming Reminders' {...allTabProps(2)} />
        </Tabs>
      </AppBar>

      {Object.entries(reminderTablesData).map((key, index) => {
        return (
          <TabPanel value={value} index={index}>
            <TableMui
              title={key[1].title}
              reminders={key[1].reminders}
              editRow={editRow}
              deleteOldReminder={deleteOldReminder}
            />
          </TabPanel>
        );
      })}
    </div>
  );
};

// typechecking with propTypes
ReminderTabs.propTypes = {
  allReminders: PropTypes.array,
  pastReminders: PropTypes.array,
  upcomingReminders: PropTypes.array,
  editRow: PropTypes.func,
  deleteOldReminder: PropTypes.func,
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default ReminderTabs;

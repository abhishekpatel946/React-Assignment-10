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

const ReminderTable = (props) => {
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

      <div className='my-outer-class'>
        {/* all reminders */}
        <TabPanel value={value} index={0}>
          <div className='my-inner-class'>
            <TableMui
              reminders={allReminders}
              editRow={editRow}
              deleteOldReminder={deleteOldReminder}
              tableHeading={'All Reminders'}
            />
          </div>
        </TabPanel>
      </div>

      {/* past reminders */}
      <TabPanel value={value} index={1}>
        <div>
          <TableMui
            reminders={pastReminders}
            editRow={editRow}
            deleteOldReminder={deleteOldReminder}
            tableHeading={'Past Reminders'}
          />
        </div>
      </TabPanel>

      {/* upcoming reminders */}
      <TabPanel value={value} index={2}>
        <div>
          <TableMui
            reminders={upcomingReminders}
            editRow={editRow}
            deleteOldReminder={deleteOldReminder}
            tableHeading={'Upcoming Reminders'}
          />
        </div>
      </TabPanel>
    </div>
  );
};

// typechecking with propTypes
ReminderTable.propTypes = {
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

export default ReminderTable;

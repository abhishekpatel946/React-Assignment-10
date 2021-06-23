import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import './style.scss';

import TableMui from './TableMui';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 100,
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

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
          <Tab label='All Reminders' {...a11yProps(0)} />
          <Tab label='Past Reminders' {...a11yProps(1)} />
          <Tab label='UpComing Reminders' {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* all reminders */}
      <TabPanel value={value} index={0}>
        <TableMui
          reminders={allReminders}
          editRow={editRow}
          deleteOldReminder={deleteOldReminder}
          tableHeading={'All Reminders'}
        />
      </TabPanel>

      {/* past reminders */}
      <TabPanel value={value} index={1}>
        <TableMui
          reminders={pastReminders}
          editRow={editRow}
          deleteOldReminder={deleteOldReminder}
          tableHeading={'Past Reminders'}
        />
      </TabPanel>

      {/* upcoming reminders */}
      <TabPanel value={value} index={2}>
        <TableMui
          reminders={upcomingReminders}
          editRow={editRow}
          deleteOldReminder={deleteOldReminder}
          tableHeading={'UpComing Reminders'}
        />
      </TabPanel>
    </div>
  );
};

// typechecking with propTypes
ReminderTable.propTypes = {
  allReminders: PropTypes.object,
  pastReminders: PropTypes.object,
  upcomingReminders: PropTypes.object,
  editRow: PropTypes.func,
  deleteOldReminder: PropTypes.func,
};

export default ReminderTable;

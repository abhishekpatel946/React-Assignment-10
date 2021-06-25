export const filterByDateTime = (
  allReminders,
  setPastReminder,
  setUpcomingReminders
) => {
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
};

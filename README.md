# React-Assignment-10
Using all the concepts of hooks you have gathered till now let's create a react app to achieve the following: 
```
* a simple reminder app  
* you can create reminders  
* a reminder would consist of a title  
* Time and date at which to remind   
* these reminders can be added updated and delete  also, 
* separate list showing all the upcoming reminders and the past reminders  
* Since this is a frontend task  
* please take user experience into consideration 
```

## Pending
```
1. fix the infinite dispatching{type: FETCH_REMINDER} from home.jsx.
2. feat the setReminder.saga.js && SET service.
2. feat the deleteReminder.saga.js && DELETE service.
2. feat the updateReminder.saga.js && UPDATE service.
3. fix the FETCH_REMINDER_FAILURE to handle error.
3. fix the SET_REMINDER_FAILURE to handle error.
4. fix the DELETE_REMINDER_FAILURE to handle error.
5. fix the UPDATE_REMINDER_FAILURE to handle error.
```

## DataFlow
```
1. Data fetch through the API and store the data using dispatching.
2. Every time get updated data from API, store in the redux-store.
3. Use the redux state to display the data whenever we use.
4. Redux-logger to watch each & every moment inside the redux.
5. Redux-saga to flow the data btw the redux-state and recieved from API call.
```

## Folder Structure
```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.js
    ├── App.scss
    ├── assets
    │   ├── forgot-password.png
    │   ├── home-1.png
    │   ├── home-2.png
    │   ├── login.png
    │   └── register.png
    ├── container
    │   ├── Alert
    │   │   ├── Alert.jsx
    │   │   ├── index.js
    │   │   └── SnackbarMui.jsx
    │   ├── Form
    │   │   ├── Form-components
    │   │   │   ├── ButtonMui.jsx
    │   │   │   ├── index.js
    │   │   │   ├── style.scss
    │   │   │   └── TextFieldMui.jsx
    │   │   ├── FormReminder.jsx
    │   │   └── index.js
    │   ├── Home
    │   │   ├── AppBar
    │   │   │   ├── index.js
    │   │   │   └── PrimarySearchAppBar.jsx
    │   │   ├── getModalStyle.js
    │   │   ├── Home.jsx
    │   │   ├── index.js
    │   │   ├── Profile
    │   │   │   ├── index.js
    │   │   │   └── Profile.jsx
    │   │   ├── rand.js
    │   │   └── style.scss
    │   ├── PageNotFound
    │   │   ├── index.js
    │   │   ├── page-404.png
    │   │   ├── PageNotFound.jsx
    │   │   └── style.scss
    │   ├── PasswordReset
    │   │   ├── index.js
    │   │   └── PasswordReset.jsx
    │   ├── SignIn
    │   │   ├── index.js
    │   │   └── SignIn.jsx
    │   ├── SignUp
    │   │   ├── index.js
    │   │   └── SignUp.jsx
    │   └── Table
    │       ├── allTabProps.jsx
    │       ├── index.js
    │       ├── ReminderTabs.jsx
    │       ├── style.scss
    │       ├── TableMui.jsx
    │       └── TabPanel.jsx
    ├── helper
    │   ├── AuthProvider
    │   │   └── AuthProvider.js
    │   ├── Firebase
    │   │   ├── config.js
    │   │   └── firebase.js
    │   ├── PrivateRoute
    │   │   ├── PrivateHomeRoute.js
    │   │   └── PrivateProfileRoute.js
    │   ├── Redux
    │   │   ├── actions
    │   │   │   └── reminder.action.js
    │   │   ├── reducers
    │   │   │   ├── reminder
    │   │   │   │   └── reminder.reducer.js
    │   │   │   └── rootReducer.js
    │   │   ├── sagas
    │   │   │   ├── reminder
    │   │   │   │   └── reminder.saga.js
    │   │   │   └── rootSaga.js
    │   │   ├── service
    │   │   │   └── reminders.service.js
    │   │   ├── store
    │   │   │   └── store.js
    │   │   └── types
    │   │       └── reminder.types.js
    │   └── Utils
    │       ├── dbService.js
    │       └── filterByDateTime.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── scss
        ├── _colorStack.scss
        └── _fontStack.scss

```

## Images

**Sign In**
![image](./src/assets/login.png)

**Sign Up**
![image](./src/assets/register.png)

**Forgot Password**
![image](./src/assets/forgot-password.png)

**Home Landing Page**
![image](./src/assets/home-1.png)

**Home Profile Section**
![image](./src/assets/home-2.png)

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';

const store = configureStore({
  reducer: contactsReducer,
});

export default store;

import { createReducer } from '@reduxjs/toolkit';
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logOutError,
  logOutSuccess,
  registerError,
  registerSuccess,
} from './authActions';

const authReducer = createReducer(
  {
    name: '',
    email: '',
    idToken: '',
    error: '',
  },
  {
    [registerSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
      idToken: payload.token,
    }),

    [loginSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
      idToken: payload.token,
    }),

    [logOutSuccess]: () => ({
      name: '',
      email: '',
      idToken: '',
    }),

    [getCurrentUserSuccess]: (state, { payload }) => ({ ...state, ...payload }),

    [registerError]: (_, { payload }) => ({
      error: payload,
    }),
    [loginError]: (_, { payload }) => ({
      error: payload,
    }),
    [logOutError]: (_, { payload }) => ({
      error: payload,
    }),
    [getCurrentUserError]: (_, { payload }) => ({
      error: payload,
    }),
  },
);

export default authReducer;

import { createAction, props } from '@ngrx/store';

export const GET_USER     = 'GET_USER';
export const ALL_USERS    = 'ALL_USERS';
export const ADD_USERS    = 'ADD_USERS';
export const UPDATE_USER  = 'UPDATE_USER';
export const DELETE_USER  = 'DELETE_USER';
export const RESET_USER   = 'RESET_USER';

export const findUser = createAction(
  GET_USER,
  props<{index: number }>()
);

export const allUser = createAction(
  ALL_USERS,
);

export const addUser = createAction(
  ADD_USERS,
  props<{payload: any[] }>()
);

export const updateUser = createAction(
  UPDATE_USER,
  props<{payload: any[] }>()
);

export const deleteUser = createAction(
  UPDATE_USER,
  props<{index: number }>()
);

export const reset = createAction(
  '[USERS] RESET LIST USERS',
);

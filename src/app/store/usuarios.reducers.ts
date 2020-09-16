import { on, createReducer } from '@ngrx/store';

import * as Actions from '../actions/usuarios.actions';
import { AppAction } from './index';

export interface State {
  list: any[];
  action: string;
}

const initialState: State = {
  list: [],
  action: null
};

const usuariosReducer = createReducer(
  initialState,
  on(Actions.findUser, state => ({...state, index: state.id })),
  on(Actions.addUser, (state, action) => ({
      ...state,
      usuarios: action.payload
    })
  ),
  on(Actions.updateUser, (state, action) => ({
      ...state,
      usuarios: action.payload
    })
  ),
  on(Actions.deleteUser, (state, action) => state.filter((user) => user.id !== action.id) ),
  on(Actions.reset, state => (initialState)),
);

export function reducer(state = initialState, action: AppAction) {
  return usuariosReducer(state, action);
}

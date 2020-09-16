import { NgModule } from '@angular/core';
import { StoreModule, createSelector } from '@ngrx/store';

import * as fromUsers from './usuarios.reducers';

export class AppAction {
    type:       string;
    payload?:   any;
}

export interface AppState {
    users: fromUsers.State;
}

export const selectUsers = (state: AppState) => state.users.list;

export const getAll = createSelector(
  selectUsers,
  users => users
);

@NgModule({
    imports: [ StoreModule ],
    exports: [ StoreModule ]
  })
export class SharedModule {}

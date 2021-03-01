import { ActionReducerMap } from '@ngrx/store';

import * as fromUserList from '../user-list/store/user-list.reducer';

export interface AppState {
  usersList: fromUserList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  usersList: fromUserList.userListReducer
};

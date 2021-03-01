import { Action } from '@ngrx/store';

import { User } from '../../shared/user.model';

export const GET_USERS = '[Friends List] fetch users';


export class GetUser implements Action {
  readonly type = GET_USERS;

  constructor(public payload: any) {}
}



export type UserListAction =
  | GetUser;

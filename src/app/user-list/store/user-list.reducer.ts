import { User } from '../../shared/user.model';
import * as UserListActions from './user-list.actions';

export interface State {
  users: User[];
}

const initialState: State = {
  users: [
    // {id:1,display_name:"santhosh d",avatar:"https://www.w3schools.com/w3images/avatar1.png"},
    // {id:2,display_name:"naveen d",avatar:"https://www.w3schools.com/w3images/avatar2.png"},
    // {id:3,display_name:"sathish d",avatar:"https://www.w3schools.com/w3images/avatar3.png"},
    // {id:4,display_name:"gowtham d",avatar:"https://www.w3schools.com/w3images/avatar4.png"},
    // {id:5,display_name:"anandh d",avatar:"https://www.w3schools.com/w3images/avatar5.png"},

  ]
};

export function userListReducer(
  state: State = initialState,
  action: UserListActions.UserListAction
) {
  switch (action.type) {
    case UserListActions.GET_USERS:
      console.log(29,action)
      return {
        ...state,
        users: [ ...action.payload]
      };
   
    default:
      return state;
  }
}

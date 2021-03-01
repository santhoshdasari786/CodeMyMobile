import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from '../shared/user.model';
import { LoggingService } from '../logging.service';
import * as UserListActions from './store/user-list.actions';
import * as fromApp from '../store/app.reducer';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: Observable<{ users: User[] }>;
  private subscription: Subscription;

  selectUser:User;

  constructor(
    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>,
    private http: HttpClient
  ) {}

  ngOnInit() {
  this.store.select("usersList").subscribe(d => {
       console.log(d)
     })
    this.users = this.store.select('usersList');

    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
    this.refresh();
  }

  refresh(){
    this.selectUser = null;
    this.http.get<any>(`/api/getUsers?start=${0}&&limit=${10}`).subscribe(data =>{
      this.store.dispatch(new UserListActions.GetUser(data.results));
    }, err=>{
      console.log(err);
      // this.store.dispatch(new UserListActions.GetUser([{id:1,display_name:"santhosh d",avatar:"https://www.w3schools.com/w3images/avatar1.png"},
      // {id:2,display_name:"naveen d",avatar:"https://www.w3schools.com/w3images/avatar2.png"},
      // {id:3,display_name:"sathish d",avatar:"https://www.w3schools.com/w3images/avatar3.png"},
      // {id:4,display_name:"gowtham d",avatar:"https://www.w3schools.com/w3images/avatar4.png"},
      // {id:5,display_name:"anandh d",avatar:"https://www.w3schools.com/w3images/avatar5.png"},]));
    } )
  }

  LoadFriends(index: number,user:User) {
    this.selectUser = user;
    
    this.http.get<any>(`/api/getFriendsList?user=${user.id}`).subscribe(data =>{
      this.store.dispatch(new UserListActions.GetUser(data.results));
    } )

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}

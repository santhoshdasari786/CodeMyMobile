import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list.component';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: UserListComponent }]),
    SharedModule
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {}

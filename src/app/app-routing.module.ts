import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'; // Adjust the path as needed
import { UserDetailComponent } from './user-detail/user-detail.component'; // Adjust the path as needed

const routes: Routes = [
{ path: 'user/:id', component: UserDetailComponent },
{ path: 'user-list', component: UserListComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
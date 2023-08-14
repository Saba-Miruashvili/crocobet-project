import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPostsComponent } from './user-posts/user-posts.component'; // Import RouterModule and Routes

const appRoutes: Routes = [
  { path: 'user/:id', component: UserDetailComponent },
  // Other routes if you have
];

@NgModule({
  declarations: [AppComponent, UserListComponent, UserDetailComponent, UserPostsComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)], // Configure routes here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

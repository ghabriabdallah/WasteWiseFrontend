import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddComponent } from './Driver/add/add.component';

import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'addDriver', component: AddComponent , canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'usersList', component: UsersListComponent, canActivate: [AdminGuard]},
  { path: 'driversList', component: DriversListComponent, canActivate: [AdminGuard]},
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

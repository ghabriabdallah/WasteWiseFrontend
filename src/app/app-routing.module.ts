import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './Authentification/registration/registration.component';
import { AddComponent } from './Driver/add/add.component';

import { LoginComponent } from './Authentification/login/login.component';
import { AdminGuard } from './admin.guard';
import { UsersListComponent } from './User/users-list/users-list.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { DriversListComponent } from './Driver/drivers-list/drivers-list.component';



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

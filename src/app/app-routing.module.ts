import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent}
=======
import { AdduserComponent } from './Driver/add/add.component';
import { UpdateuserComponent } from './Driver/update/update.component';
import { ViewusersComponent } from './Driver/view/view.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'view', component: ViewusersComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'update', component: UpdateuserComponent },
>>>>>>> 2613e56838c40bacb968b14ed2e1386bdbec7609
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdduserComponent } from './Driver/add/add.component';
import { UpdateuserComponent } from './Driver/update/update.component';
import { ViewusersComponent } from './Driver/view/view.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'view', component: ViewusersComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'update', component: UpdateuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

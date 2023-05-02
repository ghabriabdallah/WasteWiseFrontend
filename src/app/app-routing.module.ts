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
import { HouseWasteComponent } from './Services/house-waste/house-waste.component';
import { BuildingWasteComponent } from './Services/building-waste/building-waste.component';
import { OfficeWasteComponent } from './Services/office-waste/office-waste.component';
import { CommercialWasteComponent } from './Services/commercial-waste/commercial-waste.component';
import { OurServicesComponent } from './Services/our-services/our-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { BasicPlanComponent } from './Plans/basic-plan/basic-plan.component';
import { PremiumPlanComponent } from './Plans/premium-plan/premium-plan.component';
import { UltimatePlanComponent } from './Plans/ultimate-plan/ultimate-plan.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'addDriver', component: AddComponent , canActivate: [AdminGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'usersList', component: UsersListComponent, canActivate: [AdminGuard]},
  { path: 'driversList', component: DriversListComponent, canActivate: [AdminGuard]},
  { path: 'HouseWaste', component: HouseWasteComponent},
  { path: 'BuildingWaste', component: BuildingWasteComponent},
  { path: 'OfficeWaste', component: OfficeWasteComponent},
  { path: 'CommercialWaste', component: CommercialWasteComponent},
  {path: 'OurServices', component: OurServicesComponent},
  {path: 'About-us', component: AboutUsComponent},
  {path: 'subscriptionForm', component: SubscriptionFormComponent},
  {path: 'basicPlan', component: BasicPlanComponent},
  {path: 'premiumPlan', component: PremiumPlanComponent},
  {path: 'ultimatePlan', component: UltimatePlanComponent},
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

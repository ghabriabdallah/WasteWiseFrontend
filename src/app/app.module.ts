import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Authentification/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Authentification/login/login.component';
import { AdminGuard } from './admin.guard';
import { AddComponent } from './Driver/add/add.component';
import { UsersListComponent } from './User/users-list/users-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './Admin/confirmation-dialog/confirmation-dialog.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { DriversListComponent } from './Driver/drivers-list/drivers-list.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { OurServicesComponent } from './Services/our-services/our-services.component';
import { HouseWasteComponent } from './Services/house-waste/house-waste.component';
import { CommercialWasteComponent } from './Services/commercial-waste/commercial-waste.component';
import { OfficeWasteComponent } from './Services/office-waste/office-waste.component';
import { BuildingWasteComponent } from './Services/building-waste/building-waste.component';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { BasicPlanComponent } from './Plans/basic-plan/basic-plan.component';
import { PremiumPlanComponent } from './Plans/premium-plan/premium-plan.component';
import { UltimatePlanComponent } from './Plans/ultimate-plan/ultimate-plan.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    AddComponent,
    UsersListComponent,
    ConfirmationDialogComponent,
    AdminDashboardComponent,
    DriversListComponent,
    OurServicesComponent,
    HouseWasteComponent,
    CommercialWasteComponent,
    OfficeWasteComponent,
    BuildingWasteComponent,
    AboutUsComponent,
    BasicPlanComponent,
    PremiumPlanComponent,
    UltimatePlanComponent,
    UpdateUserComponent,
    ProfileComponent,
    EditProfileComponent,
    ContactUsComponent,
    FeedbacksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    NgxFileDropModule, 
  ],
  providers: [[AdminGuard],],
  bootstrap: [AppComponent]
})
export class AppModule { }

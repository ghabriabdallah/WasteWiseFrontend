import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    MatFormFieldModule 
  ],
  providers: [[AdminGuard],],
  bootstrap: [AppComponent]
})
export class AppModule { }

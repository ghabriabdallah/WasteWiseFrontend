import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';
import { AddComponent } from './Driver/add/add.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DriversListComponent } from './drivers-list/drivers-list.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { OurServicesComponent } from './our-services/our-services.component';
import { HouseWasteComponent } from './house-waste/house-waste.component';
import { CommercialWasteComponent } from './commercial-waste/commercial-waste.component';
import { OfficeWasteComponent } from './office-waste/office-waste.component';
import { BuildingWasteComponent } from './building-waste/building-waste.component';


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
    MatFormFieldModule 
  ],
  providers: [[AdminGuard],],
  bootstrap: [AppComponent]
})
export class AppModule { }

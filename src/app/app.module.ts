import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { AdduserComponent } from './Driver/add/add.component';
import { UpdateuserComponent } from './Driver/update/update.component';
import { ViewusersComponent } from './Driver/view/view.component';
>>>>>>> 2613e56838c40bacb968b14ed2e1386bdbec7609

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
<<<<<<< HEAD
    FooterComponent
=======
    AppComponent,
    UpdateuserComponent,
    ViewusersComponent
>>>>>>> 2613e56838c40bacb968b14ed2e1386bdbec7609
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // add HttpClientModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

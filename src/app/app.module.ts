import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // add HttpClientModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

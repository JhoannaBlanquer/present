import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewclassdeduComponent } from './viewclassdedu/viewclassdedu.component';
import { ViewclasseducComponent } from './viewclasseduc/viewclasseduc.component';
import { ViewclassstComponent } from './viewclassst/viewclassst.component';
import { ViewclassenrolledComponent } from './viewclassenrolled/viewclassenrolled.component';
import { CheckinnotComponent } from './checkinnot/checkinnot.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    ViewclassdeduComponent,
    ViewclasseducComponent,
    ViewclassstComponent,
    ViewclassenrolledComponent,
    CheckinnotComponent,
    LoginComponent  // Declare the ClassesComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

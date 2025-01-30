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
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ActivityComponent } from './activity/activity.component';
import { CreateclassComponent } from './createclass/createclass.component';
import { JoinclassComponent } from './joinclass/joinclass.component';
import { CheckinconnectComponent } from './checkinconnect/checkinconnect.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'

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
    LoginComponent,
    ProfileComponent,
    SignUpComponent,
    ActivityComponent,
    CreateclassComponent,
    JoinclassComponent,
    CheckinconnectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({ projectId: "present--2025", appId: "1:412519081422:web:46ec2817ce48898a45379f", storageBucket: "present--2025.firebasestorage.app", apiKey: "AIzaSyAquqoXGmYm87ZOyjcmfvADn8hwxi7GkTo", authDomain: "present--2025.firebaseapp.com", messagingSenderId: "412519081422", measurementId: "G-CL2WEB0GMX" })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

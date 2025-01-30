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
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { FormsModule } from '@angular/forms';


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
    provideFirebaseApp(() => initializeApp({ projectId: "present-db-83b6e", appId: "1:970574739382:web:8ed00089a54ecb0379f317", storageBucket: "present-db-83b6e.firebasestorage.app", apiKey: "AIzaSyDDwbhnR_96x4tQ6cqhNgZiIeQj_66MGeY", authDomain: "present-db-83b6e.firebaseapp.com", messagingSenderId: "970574739382" })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,

    /* provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider(reCAPTCHA Enterprise site key );
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
  */
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

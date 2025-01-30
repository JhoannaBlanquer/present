import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { ViewclassdeduComponent } from './viewclassdedu/viewclassdedu.component'; // Import the component
import { ViewclasseducComponent } from './viewclasseduc/viewclasseduc.component';
import { ViewclassstComponent } from './viewclassst/viewclassst.component';
import { ViewclassenrolledComponent } from './viewclassenrolled/viewclassenrolled.component';
import { CheckinnotComponent } from './checkinnot/checkinnot.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component'; // SignUpComponent
import { ActivityComponent } from './activity/activity.component'; // ActivityComponent
import { JoinclassComponent } from './joinclass/joinclass.component'; // JoinClassComponent
import { CheckinconnectComponent } from './checkinconnect/checkinconnect.component';
import { CreateClassComponent } from './createclass/createclass.component';

const routes: Routes = [
  { path: '', component: HomeComponent },         // Home page route
  { path: 'classes', component: ClassesComponent }, 
  { path: 'viewclasseduc', component: ViewclasseducComponent }, 
  { path: 'viewclassdedu', component: ViewclassdeduComponent }, 
  { path: 'viewclassst', component: ViewclassstComponent},
  { path: 'viewclassenrolled', component: ViewclassenrolledComponent},
  { path: 'checkinnot', component: CheckinnotComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'signup', component: SignUpComponent },  // SignUp route
  { path: 'activity', component: ActivityComponent },  // Activity route
  { path: 'createclass', component: CreateClassComponent },  // Create Class route
  { path: 'joinclass', component: JoinclassComponent },  // Join Class route
  { path: 'checkinconnect', component: CheckinconnectComponent },  // Check in connect route
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

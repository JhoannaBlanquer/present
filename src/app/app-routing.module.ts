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

const routes: Routes = [
  { path: '', component: HomeComponent },         // Home page route
  { path: 'classes', component: ClassesComponent }, 
  { path: 'viewclasseduc', component: ViewclasseducComponent }, 
  { path: 'viewclassdedu', component: ViewclassdeduComponent }, 
  { path: 'viewclassst', component: ViewclassstComponent},
  { path: 'viewclassenrolled', component: ViewclassenrolledComponent},
  { path: 'checkinnot', component: CheckinnotComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { HomeComponent } from "./components/home/home.component";
import { PluginContentComponent } from "./components/plugin-content/plugin-content.component";
const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'home', component : HomeComponent},
  {path:'plugin-content',component:PluginContentComponent},
  {path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
